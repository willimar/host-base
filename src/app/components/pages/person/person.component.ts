import { RegisterBase } from './../register-base';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-person',
  templateUrl: './person.component.html',
  styleUrls: []
})

export class PersonComponent extends RegisterBase implements OnInit {

  constructor(formBuilder: FormBuilder){
    super();
    this.formBuilder = formBuilder;
  }
  
  ngOnInit() {
    this.formGroupRules = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      birthDate: this.formBuilder.control('', [Validators.required, Validators.pattern(this.dateFormat)]),
      gender: this.formBuilder.control('', [Validators.required]),
      nickName: this.formBuilder.control('', [])
    }, {validator: PersonComponent.equalTo});
  }

  static equalTo():{[key:string]: boolean}{
    return undefined;
  }
}
