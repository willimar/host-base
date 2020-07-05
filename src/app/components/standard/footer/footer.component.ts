import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../../../app.component';

@Component({
  selector: 'mc-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent implements OnInit {

  version: string;
  copyRight: string;
  title: string;

  constructor(private _appComponent: AppComponent) {
    this.version = this._appComponent.fileVersion();
    this.copyRight = this._appComponent.copyRight;
    this.title = this._appComponent.applicationTitle();
  }

  ngOnInit() {
  }

}
