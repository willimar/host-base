import { RegisterBase } from './../../pages/register-base';
import { FormBuilder, Validators } from '@angular/forms';
import { IParamRowValue, ParamType } from '../../../Models/controls/grid-models/ParamRowValue';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mc-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: []
})
export class ContactListComponent extends RegisterBase implements OnInit {

  @Input() paramList: IParamRowValue[] =
   [
    {
      name: "E-mail",
      value: "willimar@gmail.com",
      paramType: ParamType.text,
      paramMask: null
     },
     {
      name: "Integer value",
      value: "5",
      paramType: ParamType.number,
      paramMask: "3.0-0"
     },
     {
      name: "Money Value",
      value: "5",
      paramType: ParamType.money,
      paramMask: "BRL"
     },
     {
      name: "Money Value",
      value: "25.4589",
      paramType: ParamType.number,
      paramMask: "1.2-3"
     }
   ];

   constructor(formBuilder: FormBuilder){
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      contactType: this.formBuilder.control('', [Validators.required]),
      value: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    }, {validator: ContactListComponent.equalTo});
  }

  static equalTo():{[key:string]: boolean}{
    return undefined;
  }
}
