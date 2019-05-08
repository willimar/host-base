import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Strings } from './../StringServices';
import { Address } from './../../Models/Register/Person/Address';
import { BaseService } from './../ServiceBase';


@Injectable()
export class AddressService extends BaseService{

    public isBrazilianCode: boolean = false;
    public url: string = "http://localhost:51914/api/Cep";

    constructor(private _http: Http, public address: Address) {
        super();
    }

    loadAddress(cep: string): Observable<Address>{

        // check if is a brazilian postal code
        var regexCep = /^[0-9]{8}$/;
        this.address = new Address();

        this.isBrazilianCode = regexCep.test(cep);
        
        if(this.isBrazilianCode){
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            var jsonForm = `{"value":"${cep}"}`;
            
            return this._http.post(this.url, 
                jsonForm, 
                new RequestOptions({headers: headers, method: RequestMethod.Post}))
            .map(response => response.json())
            .map(address => address);
        }
    }
}