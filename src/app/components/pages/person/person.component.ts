import { IColumnDef } from './../../../Models/controls/grid-models/ColumnDefModel';
import { PersonInfo } from './../../../Models/Register/Person/PersonInfo';
import { PersonService } from 'src/app/Services/registers-services/PersonService';
import { RegisterBase } from './../register-base';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../Models/Register/Person/Person';
import { stringify } from '@angular/compiler/src/util';
import { Guid } from 'src/app/Services/guid';

@Component({
  selector: 'mc-person',
  templateUrl: './person.component.html',
  styleUrls: []
})

export class PersonComponent extends RegisterBase implements OnInit {

  @Input() errorMessage: any[] = [];
  @Input() personInfo: boolean;

  columnDef: IColumnDef[] = [
    {
      headerName: 'Id',
      field: 'id',
      checkboxSelection: false,
      editable: false,
      width: 100,
      hide: true
     },
     {
      headerName: 'Name',
      field: 'name',
      checkboxSelection: true,
      editable: false,
      width: 250,
      hide: false
     },
     {
      headerName: 'Readonly',
      field: 'readOnly',
      checkboxSelection: false,
      editable: false,
      width: 100,
      hide: false
     }
   ];

  constructor(formBuilder: FormBuilder, public personService: PersonService) {
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      id: this.formBuilder.control('', [Validators.required])
    }, {validator: PersonComponent.equalTo});
  }

  savePerson(form: Person) {
    if (this.isValid()) {
      if (form.id !== '') {
        this.personService.person.id = form.id;
      } else {
        this.personService.person.id = this.getId();
      }

      this.personService.saverPerson(this.personService.person);
    } else {
      const message = {boxTitle: 'InvalidFormOperation', boxText: 'Check data before save. You need put value to all required fields.'};
      this.personService.errorMessages = [];
      this.personService.errorMessages.push(message);
    }
  }

  getErrors(): any[] {
    const result: any[] = [];
    this.personService.errorMessages.forEach(item => {
      result.push(item);
    });

    return result;
  }

  getMessages(): any[] {
    const result: any[] = [];
    this.personService.messages.forEach(item => {
      result.push(item);
    });

    return result;
  }

  getId(): string {
    if (this.personService.person.id === '' || this.personService.person.id === undefined) {
      this.personService.person.id = Guid.newGuid();
    }
    return this.personService.person.id;
  }

  isValid(): boolean {
    let result = true;

    this.personService.formGroups.forEach(item => {
      result = result && item.valid;
    });

    return result;
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }
}
