import { Component, ViewContainerRef } from '@angular/core';
import { DialogsService } from '../dialog/dialogs.service';

@Component({
    selector: 'material',
    template: require('./material.component.html'),
    providers: [DialogsService]
})

export class MaterialComponent {
    private text: string;
    public result: any;

    constructor(private dialogsService: DialogsService, private viewContainerRef: ViewContainerRef) {
        console.log('MaterialComponent CONSTRUCTOR');
    }

    clicked(par: string) {
        this.text = par;
        console.debug(par, '->', this.text);
    }

    openDialog() {
        console.debug('open dialog');
        this.dialogsService
            .confirm('Confirm Dialog', 'Are you sure you want to do this?', this.viewContainerRef)
            .subscribe(res => this.result = res);
    }
}
