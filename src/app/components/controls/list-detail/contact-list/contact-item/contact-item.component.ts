import { ContactType } from './../../../../../Models/Register/Person/PersonalContact';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonService } from 'src/app/Services/registers-services/PersonService';
import { PersonalContact } from 'src/app/Models/Register/Person/PersonalContact';

@Component({
  selector: 'mc-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: []
})
export class ContactItemComponent implements OnInit {

  @Input() item: PersonalContact; 
  @Input() personService: PersonService;

  constructor() { }

  ngOnInit() {
  }

  emitRemoveClick(value: PersonalContact){
    console.log("Click event was executed.")
    //this.removeContact.emit(value);
    this.personService.removeContactItem(value);
  }

  getContactName(contactType: ContactType): string{
    switch(contactType){
      case ContactType.blog: return "Blog";
      case ContactType.celphone: return "Celphone";
      case ContactType.phone: return "Phone";
      case ContactType.email: return "E-Mail";
      case ContactType.website: return "WebSite";
      default: "Unknow";
    }
  }

}
