import {DocumentReference} from '@angular/fire/firestore';

export interface ICourse {
    id?: string;
    klass: DocumentReference;
    code: string;
    creditHours: string;
    maintainers: string[];
    semester: DocumentReference;
    teacher: string;
    title: string;
}
