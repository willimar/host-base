import { Country } from './Country';
import { ModelBase } from './ModelBase';
export class State extends ModelBase{
    public name: string;
    public code: string;
    public initials: string;
    public country: Country;
}