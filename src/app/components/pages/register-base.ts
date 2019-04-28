import { IColumnDef } from './../../Models/controls/grid-models/ColumnDefModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRegisterBase } from './register-interface';

export class RegisterBase implements IRegisterBase {
    protected dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    columnDef: IColumnDef[] =  [
        {
          headerName: "Id",
          field: "id",
          checkboxSelection: false,
          editable: false,
          width: 100,
          hide: true
         },
         {
          headerName: "Name",
          field: "name",
          checkboxSelection: true,
          editable: false,
          width: 250,
          hide: false
         },
         {
          headerName: "Readonly",
          field: "readOnly",
          checkboxSelection: false,
          editable: false,
          width: 100,
          hide: false
         }
       ];;
    formGroupRules: FormGroup;
    formBuilder: FormBuilder
  
  }