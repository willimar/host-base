import { PersonService } from 'src/app/Services/registers-services/PersonService';
import { RegisterBase } from './../register-base';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Person } from '../../../Models/Register/Person/Person';
import { stringify } from '@angular/compiler/src/util';
import { Guid } from 'src/app/Services/guid';

@Component({
  selector: 'mc-person',
  templateUrl: './person.component.html',
  styleUrls: []
})

export class PersonComponent extends RegisterBase implements OnInit {

  constructor(formBuilder: FormBuilder, public personService: PersonService){
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required]),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      birthDate: this.formBuilder.control('', [Validators.required]),
      gender: this.formBuilder.control('', [Validators.required]),
      nickName: this.formBuilder.control('', [])
    }, {validator: PersonComponent.equalTo});
  }

  savePerson(form: Person){
    this.personService.person.id = this.getId();
    this.personService.person.name = form.name;
    this.personService.person.birthDate = form.birthDate;
    this.personService.person.gender = form.gender;
    this.personService.person.nickName = form.nickName;

    this.personService.saverPerson(this.personService.person)
      .subscribe();
  }

  getId(): string {
    if(this.personService.person.id === '' || this.personService.person.id === undefined) {
      this.personService.person.id = Guid.newGuid();
    }
    return this.personService.person.id;
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }
}
