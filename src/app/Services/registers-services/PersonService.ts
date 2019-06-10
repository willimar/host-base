import { PersonalContact } from 'src/app/Models/Register/Person/PersonalContact';
import { BaseService } from './../ServiceBase';
import { Address } from './../../Models/Register/Person/Address';
import { Person } from './../../Models/Register/Person/Person';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Status } from 'src/app/Models/Register/ModelBase';
import { SettingsComponent } from 'src/app/components/standard/settings/settings.component';
import { City } from 'src/app/Models/Register/City';

@Injectable()
export class PersonService extends BaseService {

    constructor(private _http: Http, public person: Person) {
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
      const header = new Headers();
      header.append('Content-Type', 'application/json');

      return this._http.post(`${SettingsComponent.urlRegister}/person`,
          JSON.stringify(person),
          new RequestOptions({headers: header}))
        .map(response => response.json);
    }

}
