import {Component, ElementRef ,AfterViewInit} from '@angular/core';
import {Sidenav} from './sidenav.component';
import {RightMenu} from './rightMenu.component';
import {ShoppingListComponent} from './shoppingList.component';
import {MDL} from './materialDesignUpgradeElement';

declare var componentHandler: any;

@Component({
    selector: 'my-app',
    template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout-icon"></div>
            <div class="mdl-layout__header-row">
                <span class="mdl-layout__title"><img src="http://placehold.it/40x40">Basket</span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <a class="mdl-navigation__link" href="#">User</a>
                </nav>
                <right-menu></right-menu>
            </div>
        </header>
        <sidenav class="mdl-layout__drawer"></sidenav>
        <main class="mdl-layout__content">
            <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--12-col">
                    <shopping-list></shopping-list>
                </div>
            </div>
        </main>
    </div>
    `,
    directives:[Sidenav,ShoppingListComponent,MDL,RightMenu]
})
export class AppComponent implements AfterViewInit  {

    constructor(private el:ElementRef) {}

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}
