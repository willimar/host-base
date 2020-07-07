import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: []
})

export class SettingsComponent implements OnInit {

  public static crudApiUrl = 'https://localhost:5001'; // 'http://crud-api.eastus.azurecontainer.io/api';
  public static cityApiUrl = 'https://cityapp-api.herokuapp.com/graphql';

  constructor() { }

  ngOnInit() {
  }

}
