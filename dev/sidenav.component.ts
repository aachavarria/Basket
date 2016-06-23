import {Component} from '@angular/core';

@Component({
    selector: 'sidenav',
    template: `
      <span class="mdl-layout__title">Basket</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="#">Mylist</a>
        <a class="mdl-navigation__link" href="#">Mylist</a>
        <a class="mdl-navigation__link" href="#">Mylist</a>
      </nav>
    `
})
export class Sidenav { }
