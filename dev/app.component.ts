import {Component} from '@angular/core';
import {Header} from './header.component';

@Component({
    selector: 'my-app',
    template: `
      <header></header>
    `,
    directives:[Header]
})
export class AppComponent { }
