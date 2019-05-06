import { PersonService } from 'src/app/Services/registers-services/PersonService';
import { Address } from './../../../../../Models/Register/Person/Address';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mc-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: []
})
export class AddressItemComponent implements OnInit {

  @Input() item: Address;
  @Input() personService: PersonService;

  constructor() { }

  ngOnInit() {
  }

}
