import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: []
})

export class SettingsComponent implements OnInit {

  public static urlRegister = 'http://localhost:51974/api';

  constructor() { }

  ngOnInit() {
  }

}
