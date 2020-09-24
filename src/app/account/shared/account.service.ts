import { Person } from './../../Models/Register/Person/Person';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../Services/ServiceBase';
import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  constructor(private _http: HttpClient, public person: Person) {
    super();
  }

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
