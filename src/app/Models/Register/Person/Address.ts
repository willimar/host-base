import { City } from './../City';
import { ModelBase } from './../ModelBase';
export class Address extends ModelBase{
    public publicPlace: string;
    public streedName: string;
    public fullStreeName: string;
    public number: string;
    public complement: string;
    public postalCode: string;
    public district: string;
    public city: City;
}
