import {Deserializable} from './deserializable.model';

export class Klass implements Deserializable {
    name: string;
    cr: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
