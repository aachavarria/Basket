import {Component, ElementRef ,AfterViewInit} from '@angular/core';

declare var componentHandler: any;

@Component({
    selector: 'item-detail',
    template: `
      <span>item</span>
    `
})
export class ItemDetail implements AfterViewInit  {

    constructor(private el:ElementRef) {}

    ngAfterViewInit() {
        //componentHandler.upgradeAllRegistered();
    }
}
