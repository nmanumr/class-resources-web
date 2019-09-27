import {DocumentReference} from '@angular/fire/firestore';
import {Deserializable} from './deserializable.model';

export interface IProfile {
    class: DocumentReference | null;
    currentSemester: DocumentReference | null;
    id: string;
    name: string;
    rollNum: string;
}

export class Profile implements Deserializable {
    class: DocumentReference | null;
    currentSemester: DocumentReference | null;
    id: string;
    name: string;
    rollNum: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
