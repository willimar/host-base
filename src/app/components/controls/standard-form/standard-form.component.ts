import { IColumnDef } from './../../../Models/controls/grid-models/ColumnDefModel';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Status } from 'src/app/Models/Register/ModelBase';

@Component({
  selector: 'mc-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: []
})
export class StandardFormComponent implements OnInit {

  @Input() columns: IColumnDef[];
  @Input() viewName: string;

  @Output() selectionChanged = new EventEmitter();
  @Output() openDetail = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  detailOpenEvent(value: any){
    this.openDetail.emit(value);
  }

  onSelectionChanged(value: any) {
    this.selectionChanged.emit(value);
  }

}
