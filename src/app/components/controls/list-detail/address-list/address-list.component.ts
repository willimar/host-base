import { Address } from './../../../../Models/Register/Person/Address';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterBase } from './../../../pages/register-base';
import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/app/Services/registers-services/PersonService';

@Component({
  selector: 'mc-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: []
})

export class AddressListComponent extends RegisterBase implements OnInit {

  @Input() personService: PersonService;

  constructor(formBuilder: FormBuilder) { 
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      publicPlace: this.formBuilder.control('', [Validators.required, Validators.minLength(7)]),
      number: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      complement: this.formBuilder.control('', []),
      postalCode: this.formBuilder.control('', [Validators.required, Validators.pattern(AddressListComponent.postalCodeFormat)]),
      district: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      city: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      country: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      state: this.formBuilder.control('', [Validators.required, Validators.minLength(4)])
    }, {validator: AddressListComponent.equalTo});
  }

  static equalTo():{[key:string]: boolean}{
    return undefined;
  }
  
  addAddressItem(item: Address): void{
    console.log(item);
    
    if (this.formGroupRules.valid)
    {
      this.personService.addAddressItem(item);

      this.formGroupRules.reset();
    }
    else
    {
      console.log("You tried post a empty value");
    }
  }

  removeContactItem(item: Address): void{
    this.personService.removeAddressItem(item);
  }
}
