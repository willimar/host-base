import { PersonalContact, ContactType } from './../../../../Models/Register/Person/PersonalContact';
import { RegisterBase } from '../../../pages/register-base';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
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

  @Input() personService: PersonService;

  constructor(formBuilder: FormBuilder) {
    super();
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      contactType: this.formBuilder.control('', [Validators.required, Validators.pattern(this.contactTypeFormat)]),
      value: this.formBuilder.control('', [Validators.required])
    }, {validator: ContactListComponent.equalTo});
  }

  static equalTo(group: AbstractControl):{[key:string]: boolean}{
    const contactType = group.get('contactType');
    const contactValue = group.get('value');

    if(!contactType || !contactValue){
      return undefined;
    }

    console.log(`contactType: ${contactType.value}, contactValue: ${contactValue.value}`);

    var regexCheck = function(regexExp: RegExp): {[key: string]: boolean}{
      var value: string = <string>contactValue.value;
        var match = value.match(regexExp);

        if (match && match.length > 0){
          console.log("Match to regex expression.");
          return undefined;
        }
        else{
          console.log("No match found to regex expression.");
          return {noMatch: true};
        }
    }

    switch (contactType.value)
    {
      case (ContactType.blog):{
        return regexCheck(ContactListComponent.urlFormat);
      }
      case (ContactType.website):{
        return regexCheck(ContactListComponent.urlFormat);
      }
      case (ContactType.celphone):{
        return regexCheck(ContactListComponent.telephoneFormat);
      }
      case (ContactType.phone):{
        return regexCheck(ContactListComponent.telephoneFormat);
      }
      case (ContactType.email): {
        return regexCheck(ContactListComponent.emailFormat)
      }
      default: {
        console.log("No contact type defined.");
        return undefined;
      }
    }
  }

  addContactItem(item: PersonalContact): void{
    if (this.formGroupRules.valid)
    {
      this.personService.addContactItem(item);
      this.formGroupRules.reset();
    }
    else
    {
      console.log("You tried post a empty value");
    }
  }

  removeContactItem(item: PersonalContact): void{
    console.log("Remove contact service was activated.");
    this.personService.removeContactItem(item);
  }

}
