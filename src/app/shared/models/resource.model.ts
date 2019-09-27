import {firestore} from 'firebase';
import {Deserializable} from './deserializable.model';


export class Resource implements Deserializable {
    date: firestore.Timestamp;
    driveFileId: string | null;
    ext: string | null;
    isHeading: boolean;
    mimeType: string | null;
    name: string;
    uploadedBy: string | null;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
