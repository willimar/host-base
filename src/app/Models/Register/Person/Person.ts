import { PersonInfo } from './PersonInfo';
import { City } from './../City';
import { ModelBase } from '../ModelBase';
import { PersonalContact } from './PersonalContact';
import { Address } from './Address';

export enum Gender{
    male = '0',
    famale = '1'
}

export class Person extends ModelBase {
    public personInfo: PersonInfo = new PersonInfo();
    public personalContacts: PersonalContact[] = [];
    public dependents: Person[] = [];
    public addresses: Address[] = [];
    public documents: Document[] = [];
}
