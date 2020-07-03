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
      id: this.formBuilder.control('', [Validators.required])
    }, {validator: PersonComponent.equalTo});
  }

  savePerson(form: Person) {
    console.log(this.personService.person.personInfo);

    if (form.id !== '') {
      this.personService.person.id = form.id;
    } else {
      this.personService.person.id = this.getId();
    }

    this.personService.saverPerson(this.personService.person)
       .subscribe();
  }

  getId(): string {
    if (this.personService.person.id === '' || this.personService.person.id === undefined) {
      this.personService.person.id = Guid.newGuid();
    }
    return this.personService.person.id;
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }
}
