import {Component} from '@angular/core';
import {MDL} from './materialDesignUpgradeElement';

@Component({
    selector: 'header',
    template: `
    <div mdl class="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout-icon"></div>
        <div class="mdl-layout__header-row">
          <span class="mdl-layout__title"><img src="http://placehold.it/40x40">Basket</span>
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="#">User</a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout__title">Basket</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="#">Mylist</a>
          <a class="mdl-navigation__link" href="#">Mylist</a>
          <a class="mdl-navigation__link" href="#">Mylist</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <p>Content</p>
      </main>
    </div>
    `,
    directives: [ MDL ]
})
export class Header { }
