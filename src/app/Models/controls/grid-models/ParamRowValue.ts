export enum ParamType{
    number = 1,
    text = 3,
    money = 4
}

export enum ContactType{
    blog = "3",
    celphone = "1",
    email = "2",
    phone = "0",
    website = "4"
}

export interface IParamRowValue{
    contactType: ContactType;
    value: any;
    paramType: ParamType;
    paramMask: string;
}