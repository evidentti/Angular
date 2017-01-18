import { Component } from '@angular/core';

@Component({
    selector: 'material',
    template: require('./material.component.html')
})

export class MaterialComponent {
    private text: string;

    constructor() {
        console.log('MaterialComponent CONSTRUCTOR');
    }

    openDialog(par: string) {
        this.text = par;
        console.debug(par, '->', this.text);
    }
}
