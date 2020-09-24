import { Guid } from './guid';
import { ModelBase, Status } from '../Models/Register/ModelBase';

export class BaseService {
  public errorMessages: any[] = [];

  protected getCollectionIndex(collection: ModelBase[], id: Guid): number {
      let idx = -1;
      let result = -1;

      collection.forEach(item => {
          idx++;
          if(item.id === id) {
              result = idx;
          }
      });

      return result;
  }

  protected generateDefaultValues(value: ModelBase): void {
      value.lastChageDate = new Date();

      if (!value.id) {
          value.id = Guid.newGuid();
      }

      if(!value.registerDate) {
            value.registerDate = new Date();
      }

      if(!value.status) {
          value.status = Status.active;
      }
  }

  public getList(collection: ModelBase[], status: Status): ModelBase[] {
      const result: ModelBase[] = [];

      if (collection === undefined) {
        return result;
      }

      collection.forEach(item => {
          if (item.status === status) {
              result.push(item);
          }
      });

      return result;
  }
}
