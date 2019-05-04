import { IParamRowValue, ParamType, ContactType } from '../../../../Models/controls/grid-models/ParamRowValue';
import { RegisterBase } from '../../../pages/register-base';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { PersonService } from 'src/app/Services/registers-services/PersonService';

@Component({
  selector: 'mc-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: []
})
export class ContactListComponent extends RegisterBase implements OnInit {  

  private paramTypeFormat = /^3$/;
  private contactTypeFormat = /^[0-4]$/;

  constructor(formBuilder: FormBuilder, private personService: PersonService){
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      contactType: this.formBuilder.control('', [Validators.required, Validators.pattern(this.contactTypeFormat)]),
      value: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      paramType: this.formBuilder.control('', [Validators.pattern(this.paramTypeFormat)]),
      paramMask: this.formBuilder.control('', [])
    }, {validator: ContactListComponent.equalTo});
  }

  static equalTo():{[key:string]: boolean}{
    return undefined;
  }

  addContactItem(item: IParamRowValue): void{
    console.log(item);
    
    if (this.formGroupRules.valid)
    {
      this.personService.addContactItem(item);
    }
    else
    {
      console.log("You tried post a empty value");
    }
  }

  removeContactItem(item: IParamRowValue): void{
    console.log("Remove contact service was activated.");
    this.personService.removeContactItem(item);
  }

  contactList(): IParamRowValue[]{
    return this.personService.contactList;
  }

  resetedItem(): IParamRowValue{
    return {contactType: null,
            value: null,
            paramType: ParamType.text,
            paramMask: null};
  }
}
