import { PersonalContact } from 'src/app/Models/Register/Person/PersonalContact';
import { BaseService } from './../ServiceBase';
import { Address } from './../../Models/Register/Person/Address';
import { Person } from './../../Models/Register/Person/Person';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Status } from 'src/app/Models/Register/ModelBase';

@Injectable()
export class PersonService extends BaseService { 

    constructor(private _http: Http, public person: Person) {
        super();
    }

    addContactItem(contact: PersonalContact): void{
        console.log(contact);
        this.generateDefaultValues(contact);
        console.log(contact);
        this.person.personalContact.push(contact);
    }    

    removeContactItem(contact: PersonalContact): void{
        var idx: number = this.getCollectionIndex(this.person.personalContact, contact.id);

        if (idx >= 0){
            this.person.personalContact[idx].status = Status.deleted;
        }
        else{
            console.log("Contact not found.");
        }
    }

    addAddressItem(address: Address){
        this.generateDefaultValues(address);
        this.person.address.push(address);
    }

    removeAddressItem(address: Address){
        var idx: number = this.getCollectionIndex(this.person.address, address.id);

        if (idx >= 0){
            this.person.address[idx].status = Status.deleted;
        }
        else{
            console.log("Address not found.");
        }
    }
}
