import {Component} from '@angular/core';

@Component({
    selector: 'about',
    template: require('./about.component.html')
})

export class AboutComponent {

    clicked(msg: string) {
        console.debug(msg, 'clicked');
    }
}
