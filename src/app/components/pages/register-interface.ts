import { IColumnDef } from './../../Models/controls/grid-models/ColumnDefModel';
import { AbstractControl, FormGroup } from '@angular/forms';

export interface IRegisterBase{
    columnDef: IColumnDef[];
    formGroupRules: FormGroup;

}