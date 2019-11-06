import {DocumentReference} from '@angular/fire/firestore';

export interface ISemester {
    id?: string;
    name: string;
    isCurrent: boolean;
    courses: DocumentReference[];
}
