import { Guid } from './../guid';
import { FormGroup } from '@angular/forms';
import { Status } from './../../Models/Register/ModelBase';
import { HandleCode } from './../enums/HandleCode';
import { GraphClient } from './../graphQL/graphClient';
import { PersonInfo } from './../../Models/Register/Person/PersonInfo';
import { PersonalContact } from 'src/app/Models/Register/Person/PersonalContact';
import { BaseService } from './../ServiceBase';
import { Address } from './../../Models/Register/Person/Address';
import { Person } from './../../Models/Register/Person/Person';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SettingsComponent } from 'src/app/components/standard/settings/settings.component';
import { City } from 'src/app/Models/Register/City';
import { OperationType } from '../graphQL/enums/operationType';
import { Statement } from '../graphQL/enums/statement';

@Injectable()
export class PersonService extends BaseService {

  public messages: any[] = [];
  // public formGroups: FormGroup[] = [];
  public personInfoForm: FormGroup;

  constructor(private _http: HttpClient, public person: Person) {
      super();
  }

  addContactItem(contact: PersonalContact): void {
      this.generateDefaultValues(contact);
      this.person.personalContacts.push(contact);
  }

  removeContactItem(contact: PersonalContact): void {
      const idx: number = this.getCollectionIndex(this.person.personalContacts, contact.id);

      if (idx >= 0) {
          this.person.personalContacts[idx].status = Status.deleted;
      } else {
          console.log('Contact not found.');
      }
  }

  addAddressItem(address: Address) {
    console.log(address);
    this.generateDefaultValues(address);
    console.log(address);
    this.person.addresses.push(address);
  }

  removeAddressItem(address: Address) {
      const idx: number = this.getCollectionIndex(this.person.addresses, address.id);

      if (idx >= 0) {
          this.person.addresses[idx].status = Status.deleted;
      } else {
          console.log('Address not found.');
      }
  }

  saverPerson(person: Person) {
    person.personInfo.id = person.id;

    this.errorMessages = [];
    this.messages = [];

    this.submitPerson(person.personInfo)
      .subscribe(
        data => this.responseResolve(data),
        error => this.exceptionResolve(error));
  }

  private responseResolve(value: any[]) {
    const result: any[] = [];

    value.forEach(item => {
      const code: number = item.code;
      const message = {
        boxTitle: `Message type ${item.messageTipe}`,
        boxText: `Code: ${code} with message: ${item.message}`,
        isError: false
      };

      if ((code === HandleCode.Accepted) || (code === HandleCode.Ok)) {
        message.isError = false;
        this.messages.push(message);
      } else {
        message.isError = true;
        this.errorMessages.push(message);
      }
    });
  }

  submitPerson(personInfo: PersonInfo): any {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._http.post(`${SettingsComponent.crudApiUrl}/api/Person/Person`,
        JSON.stringify(personInfo),
        httpOptions)
      .map(response => response);
  }

  private exceptionResolve(e: any) {
    const message = {
      boxTitle: `Message type ${e.name}`,
      boxText: `Code: ${e.status} with message: ${e.message}`,
      isError: false
    };

    this.errorMessages.push(message);
  }

  public loadPerson(id: Guid): any {
    const graphClient = new GraphClient(this._http);
    const body = graphClient.appendBody('person');

    body.resultFields.push('name');
    body.resultFields.push('nickName');
    body.resultFields.push('profession');
    body.resultFields.push('birthday');
    body.resultFields.push('id');
    body.resultFields.push('birthCity {id, uf }');
    body.resultFields.push('gender');
    body.resultFields.push('maritalStatus');
    body.resultFields.push('specialNeeds');

    body.appendArgument('id').appendCheck(OperationType.EqualTo, Statement.And, id.toString());

    graphClient.resolve(`${SettingsComponent.crudApiUrl}/graphql`);

    graphClient.result.subscribe(content => {
      const personResult = content.data.person[0];
      this.personInfoForm.controls.name = personResult.name;
    });

    return graphClient.result;
  }
}
