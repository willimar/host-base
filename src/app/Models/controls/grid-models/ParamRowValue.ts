export enum ParamType{
    number = 1,
    text = 3,
    money = 4
}
export interface IParamRowValue{
    name: string;
    value: any;
    paramType: ParamType;
    paramMask: string;
}