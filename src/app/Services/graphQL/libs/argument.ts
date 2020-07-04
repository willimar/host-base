import { Statement } from './../enums/statement';
import { OperationType } from './../enums/operationType';
import { Check } from './check';
import { Order } from '../enums/order';

export class Argument {
    public checks: Check[] = [];

    constructor(public name: string) {
    }

    public appendCheck(operation: OperationType, connector: Statement, value: any): Argument {
      const check: Check = new Check();

      check.operation = operation;
      check.connector = connector;
      check.value = value;
      check.order = Order.none;

      this.checks.push(check);

      return this;
    }

    public appendOrder(order: Order): Argument {
      const check: Check = new Check();

      check.order = order;

      this.checks.push(check);

      return this;
    }
}
