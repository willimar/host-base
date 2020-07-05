import { ModelBase } from './ModelBase';
import { State } from './State';

export class City extends ModelBase {
    public name: string;
    public initials: string;
    public code: string;
    public state: string;
}
