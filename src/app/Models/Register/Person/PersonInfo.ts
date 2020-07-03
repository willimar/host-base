import { ModelBase } from './../ModelBase';

export class PersonInfo extends ModelBase {
  public id: string;
  public name: string;
  public nickName: string;
  public birthDay: Date;
  // public birthCity: string;
  public gender: string;
  public maritalStatus: string;
  public specialNeeds: boolean;
  public profession: string;
}
