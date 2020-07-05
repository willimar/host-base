import { AppComponent } from './../../../app.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { IColumnDef } from './../../../Models/controls/grid-models/ColumnDefModel';

@Component({
  selector: 'mc-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: []
})
export class PersonTypeComponent implements OnInit {
  columnDef: IColumnDef[] = [
    {
      headerName: 'Id',
      field: 'id',
      checkboxSelection: false,
      editable: false,
      width: 100,
      hide: true
     },
     {
      headerName: 'Name',
      field: 'name',
      checkboxSelection: true,
      editable: false,
      width: 250,
      hide: false
     },
     {
      headerName: 'Readonly',
      field: 'readOnly',
      checkboxSelection: false,
      editable: false,
      width: 100,
      hide: false
     }
   ];

  constructor(private _appComponent: AppComponent) {

  }

  ngOnInit() {

  }

}
