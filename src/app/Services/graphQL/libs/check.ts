import { Statement } from './../enums/statement';
import { OperationType } from './../enums/operationType';
import { Order } from './../enums/order';

export class Check {
    public operation = OperationType.EqualTo;
    public connector = Statement.And;
    public order = Order.none;
    public value: any;
}
