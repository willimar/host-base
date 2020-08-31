import { Guid } from './../../../Services/guid';
import { ModelBase } from './../ModelBase';

export class PersonInfo extends ModelBase {
  public id: Guid;
  public name: string;
  public nickName: string;
  public birthDay: Date;
  public birthCity = '';
  public birthState = '';
  public gender: string;
  public maritalStatus: string;
  public specialNeeds = false;
  public profession: string;
}
