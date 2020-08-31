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

  private _id: Guid;

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
      checkboxSelection: false,
      editable: false,
      width: 200,
      hide: false
     },
     {
      headerName: 'Nick',
      field: 'nickName',
      checkboxSelection: false,
      editable: false,
      width: 100,
      hide: false
     },
     {
      headerName: 'Special needs',
      field: 'specialNeeds',
      checkboxSelection: true,
      editable: false,
      width: 120,
      hide: false
     },
     {
      headerName: 'Profession',
      field: 'profession',
      checkboxSelection: false,
      editable: false,
      width: 250,
      hide: false
     },
     {
      headerName: 'Register',
      field: 'registerDate',
      checkboxSelection: false,
      editable: false,
      width: 200,
      hide: false
     },
     {
      headerName: 'Changed',
      field: 'lastChangeDate',
      checkboxSelection: false,
      editable: false,
      width: 200,
      hide: false
     },
     {
      headerName: 'Status',
      field: 'status',
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

  getId(): Guid {
    if (this.personService.person.id === '' || this.personService.person.id === undefined) {
      this.personService.person.id = Guid.newGuid();
    }
    return this.personService.person.id;
  }

  isValid(): boolean {
    let result = true;

    result = result && this.personService.personInfoForm.valid;

    return result;
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }

  openDetail(value: any) {
    this.personService.loadPerson(this._id);
      // .subscribe(content => {
      //   const personResult = content.data.person[0];

      //   // this.person = new Person();
      //   // const person = this.personService.person;

      //   // person.id = personResult.id;
      //   // person.personInfo.id = personResult.id;
      //   // person.personInfo.birthCity = personResult.birthCity.id;
      //   // person.personInfo.birthState = personResult.birthCity.uf;
      //   // person.personInfo.name = personResult.name;
      //   // person.personInfo.nickName = personResult.nickName;
      //   // person.personInfo.gender = personResult.gender;
      //   // person.personInfo.maritalStatus = personResult.maritalStatus;
      //   // person.personInfo.specialNeeds = personResult.specialNeeds;
      //   // person.personInfo.profession = personResult.profession;

      //   // this.personService.personInfoForm.controls.name = personResult.name;
      // });
  }

  onSelectionChanged(value: any): void {
    this._id = value.api.getSelectedRows()[0].id;
    console.log(this._id);
  }
}
