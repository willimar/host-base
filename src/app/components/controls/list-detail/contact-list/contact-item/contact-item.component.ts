import { ContactType } from '../../../../../Models/controls/grid-models/ParamRowValue';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IParamRowValue } from 'src/app/Models/controls/grid-models/ParamRowValue';
import { PersonService } from 'src/app/Services/registers-services/PersonService';

@Component({
  selector: 'mc-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: []
})
export class ContactItemComponent implements OnInit {

  @Input() item: IParamRowValue; 
  @Input() personService: PersonService;

  @Output() removeContact = new EventEmitter<IParamRowValue>();

  constructor() { }

  ngOnInit() {
  }

  emitRemoveClick(value: IParamRowValue){
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
