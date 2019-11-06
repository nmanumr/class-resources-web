import {firestore} from 'firebase';

export interface ITask {
    id?: string;
    dueDate: firestore.Timestamp;
    type: 'assignment' | 'quiz' | 'other';
    title: string;
}
