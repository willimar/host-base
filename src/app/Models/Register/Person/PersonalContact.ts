import { ModelBase } from './../ModelBase';

export enum ContactType{
    phone = "0",
    celphone = "1",
    email = "2",
    blog = "3",
    website = "4"
}

export class PersonalContact extends ModelBase{
    public contactType: ContactType;
    public value: string;
} 