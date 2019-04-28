import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class PersonService {
    constructor(private _http: Http) {
    }
}
