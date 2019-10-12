import {Component, Input} from '@angular/core';

@Component({
    selector: 'text-avatar',
    template: '<div [style.background]="getColor()"><span>{{getShortText()}}</span></div>',
    styles: [
        'div {' +
        '    border-radius: 50%;' +
        '    height: 36px;' +
        '    width: 36px;' +
        '    color: #fff;' +
        '    font-size: 14px;' +
        '    font-weight: 500;' +
        '    display: flex;' +
        '    justify-content: center;' +
        '    align-items: center;' +
        '}'
    ]
})
export class TextAvatarComponent {
    @Input() text: string;

    getShortText() {
        return this.text.split(' ').map((e) => e[0]).slice(0, 2).join('').toUpperCase();
    }

    getColor() {
        return `hsl(${this.hashCode(this.text) % 360}, 80%, 45%)`;
    }

    hashCode(str: string) {
        let hash = 0;
        if (str.length === 0) {
            return hash;
        }
        for (let i = 0; i < str.length; i++) {
            const chr = str.charCodeAt(i);
            // tslint:disable-next-line:no-bitwise
            hash = ((hash << 5) - hash) + chr;
            // tslint:disable-next-line:no-bitwise
            hash |= 0; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }
}
