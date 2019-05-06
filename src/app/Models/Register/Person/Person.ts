import { ModelBase } from "../ModelBase";
import { PersonalContact } from "./PersonalContact";
import { Address } from "./Address";

export enum Gender{
    male = "0",
    famale = "1"
}

export class Person extends ModelBase{
    public name: string;
    public birthDate: Date;
    public gender: Gender;
    public personalContact: PersonalContact[] = [];
    public dependents: Person[] = [];
    public address: Address[] = [];
    public documents: Document[] = [];
}