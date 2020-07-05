import { AddressService } from './../../../../Services/registers-services/AddressService';
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

  constructor(formBuilder: FormBuilder, private addressService: AddressService) {
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      fullStreeName: this.formBuilder.control('', [Validators.required, Validators.minLength(7)]),
      number: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      complement: this.formBuilder.control('', []),
      postalCode: this.formBuilder.control('', [Validators.required, Validators.pattern(AddressListComponent.postalCodeFormat)]),
      district: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      city: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      country: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      state: this.formBuilder.control('', [Validators.required, Validators.minLength(4)])
    }, {validator: AddressListComponent.equalTo});
  }

  // tslint:disable-next-line: member-ordering
  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }

  addAddressItem(item: Address): void {
    if (this.formGroupRules.valid) {
      this.personService.addAddressItem(item);

      this.formGroupRules.reset();
    } else {
      console.log('You tried post a empty value');
    }
  }

  removeContactItem(item: Address): void {
    this.personService.removeAddressItem(item);
  }

  loadCep(cep: string) {
    this.addressService.loadAddress(cep).subscribe((address) => {
      const fullStreeName = this.formGroupRules.get('fullStreeName');
      const number = this.formGroupRules.get('number');
      const complement = this.formGroupRules.get('complement');
      const district = this.formGroupRules.get('district');
      const city = this.formGroupRules.get('city');
      const country = this.formGroupRules.get('country');
      const state = this.formGroupRules.get('state');

      fullStreeName.setValue(address.fullStreeName);
      number.setValue(address.number);
      complement.setValue(address.complement);
      district.setValue(address.district);
      city.setValue(address.city.name);
      // country.setValue(address.city.state.country.name);
      // state.setValue(address.city.state.name);
    });
  }
}
