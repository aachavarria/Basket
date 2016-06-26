"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var sidenav_component_1 = require('./sidenav.component');
var rightMenu_component_1 = require('./rightMenu.component');
var materialDesignUpgradeElement_1 = require('./materialDesignUpgradeElement');
var AppComponent = (function () {
    function AppComponent(el) {
        this.el = el;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeAllRegistered();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n    <div class=\"mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header\">\n        <header class=\"mdl-layout__header\">\n            <div class=\"mdl-layout-icon\"></div>\n            <div class=\"mdl-layout__header-row\">\n                <span class=\"mdl-layout__title\"><a [routerLink]=\"['/']\"><img src=\"http://placehold.it/40x40\">Basket</a></span>\n                <div class=\"mdl-layout-spacer\"></div>\n                <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n                    <a class=\"mdl-navigation__link\" href=\"#\">User</a>\n                </nav>\n                <right-menu></right-menu>\n            </div>\n        </header>\n        <sidenav class=\"mdl-layout__drawer\"></sidenav>\n        <main class=\"mdl-layout__content\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n    ",
            directives: [sidenav_component_1.Sidenav, materialDesignUpgradeElement_1.MDL, rightMenu_component_1.RightMenu, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map