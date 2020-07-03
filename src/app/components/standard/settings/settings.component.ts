import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: []
})

export class SettingsComponent implements OnInit {

  public static urlRegister = 'http://crud-api.eastus.azurecontainer.io/api';

  constructor() { }

  ngOnInit() {
  }

}
