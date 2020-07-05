import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgGridNg2 } from 'ag-grid-angular';
import { IColumnDef } from './../../../Models/controls/grid-models/ColumnDefModel';

@Component({
  selector: 'mc-grid-control',
  templateUrl: './grid-control.component.html',
  styleUrls: []
})
export class GridControlComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;

  widthUnity: string;
  heightUnity: string;

  width: number;
  height: number;

  @Input() columnDefs: IColumnDef[];

  @Input() rowData: any;
  @Input() url: string;

  constructor(private _http: HttpClient) {
    this.height = window.innerHeight;
    this.width = 100;

    this.widthUnity = "%";
    this.heightUnity = "px";
  }

  private getStyle(): string{
    const result =
      `width: ${this.width}${this.widthUnity}; height: ${this.height}${this.heightUnity};`;

    console.log(result);
    return result;
  }

  ngOnInit() {
    // this.rowData = this._http.get("http://localhost:3000/person-type");
  }

}
