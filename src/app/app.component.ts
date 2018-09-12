import { Component } from '@angular/core';

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title: string = 'MC - Host.Info'
  version: string = '1.0.0.1'
  content: string = 'Simple system to record info about servers hosts.'
  copyRight: string = 'Ⓒ Copyright 2018.'
  author: string = 'Willimar Augusto Rocha'

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
