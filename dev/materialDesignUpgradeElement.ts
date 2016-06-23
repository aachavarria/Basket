/*Because Material design is not complete ready for angular2 we need to create a upgrade afterViewInit*/
import {Directive, AfterViewInit} from '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewInit {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}
