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

@Injectable()
export class PersonService extends BaseService {

    constructor(private _http: HttpClient, public person: Person) {
        super();
    }

    addContactItem(contact: PersonalContact): void {
        console.log(contact);
        this.generateDefaultValues(contact);
        console.log(contact);
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

}
