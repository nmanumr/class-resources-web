import {firestore} from 'firebase';

export interface IResource {
    id?: string;
    date: firestore.Timestamp;
    driveFileId: string | null;
    downloadUrl: string | null;
    openUrl: string | null;
    ext: string | null;
    isHeading: boolean;
    mimeType: string | null;
    name: string;
    uploadedBy: string | null;
}
