import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IParamRowValue } from "src/app/Models/controls/grid-models/ParamRowValue";

@Injectable()
export class PersonService {

    contactList: IParamRowValue[] = []; 

    constructor(private _http: Http) {
    }

    addContactItem(contact: IParamRowValue): void{
        this.contactList.push(contact);
    }

    removeContactItem(contact: IParamRowValue): void{
        var idx: number = -1;

        this.contactList.forEach(item => {
            idx++;
            if(item.contactType == contact.contactType && 
                item.paramType == contact.paramType && 
                item.value == contact.value){
                    this.contactList.splice(idx, 1);
            }
        });
    }
}
