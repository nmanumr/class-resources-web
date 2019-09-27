import {DocumentReference} from '@angular/fire/firestore';
import {Deserializable} from './deserializable.model';

export class Course implements Deserializable {
    klass: DocumentReference;
    code: string;
    creditHours: string;
    maintainers: string[];
    semester: DocumentReference;
    teacher: string;
    title: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
