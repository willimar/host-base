export enum Status {
    active = '0',
    blocked = '1',
    deleted = '2'
}

export class ModelBase {
    public id: string;
    public registerDate: Date;
    public lastChageDate: Date;
    public status: Status;
}
