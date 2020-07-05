export interface ISelect {
  id: string;
  text: string;
}

export class Select implements ISelect {
  id: string;
  text: string;
  children: ISelect[] = [];
}
