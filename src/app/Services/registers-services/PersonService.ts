import { GraphClient } from './../graphQL/graphClient';
import { PersonInfo } from './../../Models/Register/Person/PersonInfo';
import { PersonalContact } from 'src/app/Models/Register/Person/PersonalContact';
import { BaseService } from './../ServiceBase';
import { Address } from './../../Models/Register/Person/Address';
import { Person } from './../../Models/Register/Person/Person';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Status } from 'src/app/Models/Register/ModelBase';
import { SettingsComponent } from 'src/app/components/standard/settings/settings.component';
import { City } from 'src/app/Models/Register/City';
import { OperationType } from '../graphQL/enums/operationType';
import { Statement } from '../graphQL/enums/statement';

@Injectable()
export class PersonService extends BaseService {

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

    saverPerson(person: Person): any {
      person.personInfo.id = person.id;

      this.submitPerson(person.personInfo)
       .subscribe();
    }

    submitPerson(personInfo: PersonInfo): any {
      const header = new Headers();
      header.append('Content-Type', 'application/json');

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      console.log(JSON.stringify(personInfo));
      return this._http.post(`${SettingsComponent.urlRegister}/Person/Person`,
          JSON.stringify(personInfo),
          httpOptions)
        .map(response => console.log(response));
    }

    private teste(g: GraphClient) {
      g.appendBody('city').appendArgument('name').appendCheck(OperationType.EqualTo, Statement.And, 'Juiz de Fora');
      g.body[0].resultFields.push('hashId');
      g.body[0].resultFields.push('ibge7Code');
      g.body[0].resultFields.push('ibgeCode');
      g.body[0].resultFields.push('id');
      g.body[0].resultFields.push('isCapital');
      g.body[0].resultFields.push('lastChangeDate');
      g.body[0].resultFields.push('name');
      g.body[0].resultFields.push('population');
      g.body[0].resultFields.push('region');
      g.body[0].resultFields.push('registerDate');
      g.body[0].resultFields.push('size');
      g.resolve('https://cityapp-api.herokuapp.com/graphql');
    }
}
