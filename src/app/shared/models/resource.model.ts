import {firestore} from 'firebase';

export interface IResource {
    date: firestore.Timestamp;
    driveFileId: string | null;
    ext: string | null;
    isHeading: boolean;
    mimeType: string | null;
    name: string;
    uploadedBy: string | null;
}
