import { EventEmitter } from 'events';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'mc-box',
  templateUrl: './box.component.html',
  styleUrls: []
})
export class BoxComponent implements OnInit {

  @Input() boxTitle: string;
  @Input() useMinimize: boolean;
  @Input() boxClass: string;
  @Input() topLabel: string;

  constructor() {
    this.boxTitle = '';
    this.useMinimize = false;
    this.boxClass = 'box-default';
  }

  ngOnInit() {
  }

  GetBoxClass(): string{
    return `box ${this.boxClass}`;
  }


}
