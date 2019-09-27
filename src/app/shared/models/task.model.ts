import {firestore} from 'firebase';
import {Deserializable} from './deserializable.model';

export class Task implements Deserializable {
    dueDate: firestore.Timestamp;
    type: 'assignment' | 'quiz' | 'other';
    title: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
