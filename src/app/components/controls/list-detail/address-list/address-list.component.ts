import { FormBuilder, Validators } from '@angular/forms';
import { RegisterBase } from './../../../pages/register-base';
import { Component, OnInit } from '@angular/core';
import { baseDirectiveCreate } from '@angular/core/src/render3/instructions';
import { PersonService } from 'src/app/Services/registers-services/PersonService';

@Component({
  selector: 'mc-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: []
})
export class AddressListComponent extends RegisterBase implements OnInit {

  constructor(formBuilder: FormBuilder, private personService: PersonService) { 
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      publicPlace: this.formBuilder.control('', [Validators.required]),
      number: this.formBuilder.control('', [Validators.required]),
      complement: this.formBuilder.control('', []),
      postalCode: this.formBuilder.control('', []),
      district: this.formBuilder.control('', []),
      state: this.formBuilder.control('', []),
      country: this.formBuilder.control('', []),
      city: this.formBuilder.control('', [])
    }, {validator: AddressListComponent.equalTo});
  }

  static equalTo():{[key:string]: boolean}{
    return undefined;
  }
}
