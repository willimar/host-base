import { ModelBase } from './../ModelBase';
export class Document extends ModelBase{
    public name: string;
    public value: string;
    public emissionDate: Date;
    public complement: string;
}