import { Statement } from './../enums/statement';
import { OperationType } from './../enums/operationType';
import { Order } from './../enums/order';

export class Check {
    public operation: OperationType;
    public connector: Statement;
    public order: Order;
    public value: any;
}
