import { Statement } from './../../../../Services/graphQL/enums/statement';
import { OperationType } from './../../../../Services/graphQL/enums/operationType';
import { SettingsComponent } from './../../../standard/settings/settings.component';
import { AppComponent } from './../../../../app.component';
import { HttpClient } from '@angular/common/http';
import { GraphClient } from './../../../../Services/graphQL/graphClient';
import { Select, ISelect } from './../../../../Models/Register/select';
import { PersonInfo } from './../../../../Models/Register/Person/PersonInfo';
import { RegisterBase } from './../../../pages/register-base';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'src/app/Services/registers-services/PersonService';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Order } from 'src/app/Services/graphQL/enums/order';

@Component({
  selector: 'mc-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: []
})

export class PersonInfoComponent extends RegisterBase implements OnInit {

  @Input() personService: PersonService;
  cities: ISelect[] = [];
  states: ISelect[] = [];

  constructor(public formBuilder: FormBuilder, private _http: HttpClient) {
    super();

    this.loadStates();
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      birthDay: this.formBuilder.control('', [Validators.required]),
      birthState: this.formBuilder.control('', [Validators.required]),
      birthCity: this.formBuilder.control('', [Validators.required]),
      gender: this.formBuilder.control('', [Validators.required]),
      maritalStatus: this.formBuilder.control('', [Validators.required]),
      specialNeeds: this.formBuilder.control('', []),
      nickName: this.formBuilder.control('', [])
    }, {validator: PersonInfoComponent.equalTo});
  }

  savePerson(form: PersonInfo) {
    this.personService.person.personInfo.name = form.name;
    this.personService.person.personInfo.birthDay = form.birthDay;
    this.personService.person.personInfo.gender = form.gender;
    this.personService.person.personInfo.nickName = form.nickName;
    this.personService.person.personInfo.specialNeeds = form.specialNeeds;
    this.personService.person.personInfo.maritalStatus = form.maritalStatus;
  }

  setBirthCity(value: any) {
    this.personService.person.personInfo.birthCity = value;
  }

  setBirthState(value: any) {
    this.personService.person.personInfo.birthState = value;
    this.cities = [];
    this.loadCities(value);
  }

  getState(): string {
    return this.personService.person.personInfo.birthState;
  }

  getStates(): any[] {
    const result = [];

    this.states.forEach(item => {
      result.push({id: item.id, text: item.text});
    });

    return result;
  }

  getCity(): string {
    return this.personService.person.personInfo.birthCity;
  }

  getCities(): any[] {
    const result = [];

    this.cities.forEach(item => {
      result.push({id: item.id, text: item.text});
    });

    return result;
  }

  private loadStates() {
    const client = new GraphClient(this._http);
    const body = client.appendBody('state');

    body.resultFields.push('initials');
    body.resultFields.push('name');

    body.appendArgument('name').appendOrder(Order.asc);

    client.resolve(SettingsComponent.cityApiUrl);

    client.result.subscribe(content => this.stateMapper(content));
  }

  private loadCities(state: string) {
    const client = new GraphClient(this._http);
    const body = client.appendBody('city');

    body.resultFields.push('id');
    body.resultFields.push('name');

    body.appendArgument('uF').appendCheck(OperationType.EqualTo, Statement.And, state);
    body.appendArgument('name').appendOrder(Order.asc);

    client.resolve(SettingsComponent.cityApiUrl);

    client.result.subscribe(content => this.cityMapper(content));
  }

  private stateMapper(json: any) {
    const states: any[] = json.data.state;

    states.forEach(item => {
      const state = {
        id: item.initials,
        text: item.name
      };

      this.states.push(state);
    });
  }

  private cityMapper(json: any) {
    if (json.data === undefined) {
      return;
    }

    const cities: any[] = json.data.city;

    cities.forEach(item => {
      const city = {
        id: item.id,
        text: item.name
      };

      this.cities.push(city);
    });
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }

}
