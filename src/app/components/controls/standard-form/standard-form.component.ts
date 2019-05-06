import { IColumnDef } from './../../../Models/controls/grid-models/ColumnDefModel';
import { Component, OnInit, Input } from '@angular/core';
import { Status } from 'src/app/Models/Register/ModelBase';

@Component({
  selector: 'mc-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: []
})
export class StandardFormComponent implements OnInit {
  @Input() columns: IColumnDef[];
  @Input() groupName: String;
  
  constructor() { }
  
  ngOnInit() {
    
  }

}
