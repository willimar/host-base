import { Guid } from './guid';
import { ModelBase, Status } from "../Models/Register/ModelBase";

export class BaseService{

    protected getCollectionIndex(collection: ModelBase[], id: string): number{
        var idx = -1;
        var result = -1;

        collection.forEach(item => {
            idx++;
            if(item.id == id){
                result = idx;
            }
        });

        return result;
    }

    protected generateDefaultValues(value: ModelBase): void{
        value.lastChageDate = new Date();

        if(!value.id){
            value.id = Guid.newGuid();
        }

        if(!value.registerDate){
             value.registerDate = new Date();
        }

        if(!value.status){
            value.status = Status.active;
        }
    }

    public getList(collection: ModelBase[], status: Status): ModelBase[]{
        var result: ModelBase[] = [];

        collection.forEach(item => {
            if(item.status == status){
                result.push(item);
            }
        });

        return result;
    }
}