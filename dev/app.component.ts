import {Component, ElementRef ,AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Sidenav} from './sidenav.component';
import {RightMenu} from './rightMenu.component';
import {MDL} from './materialDesignUpgradeElement';
import {HTTP_PROVIDERS} from '@angular/http';
import {ShoppingListService} from './services/shoppingList.service';

declare var componentHandler: any;

@Component({
    selector: 'my-app',
    template: `

    <div class="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout-icon"></div>
            <div class="mdl-layout__header-row">
                <span class="mdl-layout__title"><a [routerLink]="['/']"><img src="http://placehold.it/40x40">Basket</a></span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <a class="mdl-navigation__link" href="#">User</a>
                </nav>
                <right-menu></right-menu>
            </div>
        </header>
        <sidenav class="mdl-layout__drawer"></sidenav>
        <main class="mdl-layout__content">
            <router-outlet></router-outlet>
        </main>
        
    </div>
    `,
    directives:[Sidenav,MDL,RightMenu,ROUTER_DIRECTIVES],
    providers:[HTTP_PROVIDERS]
})
export class AppComponent implements AfterViewInit  {

    constructor(private el:ElementRef) {}

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}
