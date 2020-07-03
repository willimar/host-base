import { PersonInfo } from './../../../../Models/Register/Person/PersonInfo';
import { PersonComponent } from './../../../pages/person/person.component';
import { RegisterBase } from './../../../pages/register-base';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from 'src/app/Services/registers-services/PersonService';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mc-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: []
})

export class PersonInfoComponent extends RegisterBase implements OnInit {

  @Input() personService: PersonService;

  constructor(formBuilder: FormBuilder) {
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      birthDay: this.formBuilder.control('', [Validators.required]),
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
    // this.personService.person.birthCity = form.birthCity;
    this.personService.person.personInfo.maritalStatus = form.maritalStatus;
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }

}
