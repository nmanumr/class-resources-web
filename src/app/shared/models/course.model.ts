import {DocumentReference} from '@angular/fire/firestore';

export interface ICourse {
    klass: DocumentReference;
    code: string;
    creditHours: string;
    maintainers: string[];
    semester: DocumentReference;
    teacher: string;
    title: string;
}
