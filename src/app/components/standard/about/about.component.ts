import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../../../app.component';

@Component({
  selector: 'mc-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {

  copyRight: string;
  author: string;
  title: string;
  version: string;

  constructor(private _appComponent : AppComponent) { 
    this.copyRight = this._appComponent.copyRight
    this.author = this._appComponent.author
    this.title = this._appComponent.title
    this.version = this._appComponent.version
  }

  ngOnInit() {
  }

}
