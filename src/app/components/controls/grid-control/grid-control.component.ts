import { FormBuilder, FormGroup } from '@angular/forms';
import { GraphClient } from './../../../Services/graphQL/graphClient';
import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgGridNg2 } from 'ag-grid-angular';
import { IColumnDef } from './../../../Models/controls/grid-models/ColumnDefModel';
import { SettingsComponent } from '../../standard/settings/settings.component';

@Component({
  selector: 'mc-grid-control',
  templateUrl: './grid-control.component.html',
  styleUrls: []
})
export class GridControlComponent implements OnInit {

  // @ViewChild('agGrid') agGrid: AgGridNg2;

  width: number;
  height: number;

  @Input() columnDefs: any[];
  @Input() viewName: string;

  @Input() rowData: any;
  @Input() url: string;

  formGroupRules: FormGroup;

  constructor(private _http: HttpClient, private formBuilder: FormBuilder) {
    this.height = window.innerHeight;
    this.width = 100;
  }

  private clientPrepare() {
    const graphClient = new GraphClient(this._http);
    const body = graphClient.appendBody(this.viewName);

    this.columnDefs.forEach(item => {
      body.resultFields.push(item.field);
    });

    body.queryInfo.limit = 50;
    body.queryInfo.page = 1;

    graphClient.resolve(`${SettingsComponent.crudApiUrl}/graphql`);

    graphClient.result.subscribe(content => this.gridMount(content));
  }

  private gridMount(data: any) {
    this.rowData = data.data.person;
  }

  ngOnInit() {
    const grid = document.getElementById('agGrid');

    grid.style.width = `${this.width}%`;
    grid.style.height = `${this.height - 170}px`;

    this.clientPrepare();
  }

}
