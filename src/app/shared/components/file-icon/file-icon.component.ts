import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-file-icon',
    template: '<img [src]="getIconPath()" [alt]="fileExt" height="36px">',
})
export class FileIconComponent {
    @Input() fileExt: string;

    icons = {
        doc: 'doc.svg',
        docx: 'doc.svg',
        exe: 'exe.svg',
        jpg: 'jpg.svg',
        jpeg: 'jpg.svg',
        png: 'png.svg',
        mp4: 'mp4.svg',
        ppt: 'ppt.svg',
        pptx: 'ppt.svg',
        pdf: 'pdf.svg',
        rtf: 'rtf.svg',
        xls: 'xls.svg',
        xlsx: 'xls.svg'
    };

    getIconPath() {
        return `../../../../assets/file-icons/${this.icons[this.fileExt]}`;
    }
}
