import {DocumentReference} from '@angular/fire/firestore';

export interface ISemester {
    name: string;
    isCurrent: boolean;
    courses: DocumentReference[];
}
