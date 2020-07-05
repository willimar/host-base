import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent implements OnInit {

  public majorVersion = 1;
  public minorVersion = 0;
  public release = 1;
  public build = 10;
  public companyName = 'Mundo Conecto';
  public appName = 'Host.Base';
  public description = 'Simple system to record info about servers hosts.';
  public copyRight = 'Ⓒ Copyright 2018';
  public author = 'Willimar Augusto Rocha';
  public cityApiUrl = 'https://cityapp-api.herokuapp.com/graphql';

  fileVersion(): string {
    return `${this.majorVersion}.${this.minorVersion}.${this.release}.${this.build}`;
  }

  applicationTitle(): string {
    return `${this.companyName} - ${this.appName}`;
  }

  constructor() {

  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }
}
