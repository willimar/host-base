import { Component } from '@angular/core';

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  majorVersion: number = 1;
  minorVersion: number = 0;
  release: number = 1;
  build: number = 10;

  companyName: string = "Mundo Conecto";
  appName: string = "Host.Base";
  description: string = 'Simple system to record info about servers hosts.'
  
  copyRight: string = 'Ⓒ Copyright 2018'
  author: string = 'Willimar Augusto Rocha'

  fileVersion(): string{
    return `${this.majorVersion}.${this.minorVersion}.${this.release}.${this.build}`;
  }

  applicationTitle(): string{
    return `${this.companyName} - ${this.appName}`
  }

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
