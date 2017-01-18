import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Ng2Sandbox} from 'ng-2-sandbox';

@Component({
  selector: 'main'
})

@View({
  directives: [Ng2Sandbox],
  template: `
    <ng-2-sandbox></ng-2-sandbox>
  `
})

class Main {

}

bootstrap(Main);
