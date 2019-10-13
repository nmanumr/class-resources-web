import {DocumentReference} from '@angular/fire/firestore';

export interface IProfile {
    class: DocumentReference | null;
    currentSemester: DocumentReference | null;
    id: string;
    name: string;
    rollNum: string;
}
