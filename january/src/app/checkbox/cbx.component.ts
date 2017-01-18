import { Component } from '@angular/core';

@Component({
    selector: 'cbx',
    template: require('./cbx.component.html'),
    // styleUrls: ['./cbx.component.css']
})

export class CbxComponent {
    checked = false;
    indeterminate = false;
    align = 'start';
    disabled = false;
}
