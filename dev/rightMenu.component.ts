import {Component, ElementRef ,AfterViewInit} from '@angular/core';

declare var componentHandler: any;

@Component({
    selector: 'right-menu',
    template: `
            <button id="menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon mdl-layout--small-screen-only">
              <i class="material-icons">more_vert</i>
            </button>
            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                for="menu-lower-right">
              <li class="mdl-menu__item">Remane List</li>
              <li class="mdl-menu__item">Delete List</li>
              <li class="mdl-menu__item">Clear List</li>
              <li class="mdl-menu__item">Share List</li>
            </ul>
    `
})
export class RightMenu implements AfterViewInit  {

    constructor(private el:ElementRef) {}

    ngAfterViewInit() {
        //componentHandler.upgradeAllRegistered();
    }
}
