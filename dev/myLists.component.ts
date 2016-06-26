import {Component, ElementRef ,AfterViewInit} from '@angular/core';

declare var componentHandler: any;

@Component({
    selector: 'lists',
    template: `
    <div class="mdl-grid">
      <div class="list-card mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">Name</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <ul class="mdl-list">
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                Item 2
              </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                Item 2
              </span>
            </li>
            <li class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                Item 2
              </span>
            </li>
          </ul>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View all items
          </a>
        </div>
      </div>
    </div>
    `
})
export class MyLists implements AfterViewInit  {

    constructor(private el:ElementRef) {}

    ngAfterViewInit() {
        //componentHandler.upgradeAllRegistered();
    }
}
