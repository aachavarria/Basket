import {Component} from '@angular/core';

@Component({
    selector: 'shopping-list',
    template: `
        <ul class="demo-list-control mdl-list">
          <li class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
                <label for="chkbox1" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="chkbox1" class="mdl-checkbox__input">
                </label>
                <span>Item 1</span>
            </span>
            <span class="mdl-list__item-secondary-action">
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">toc</i>
            </button>
            </span>
          </li>
        </ul>
    `
})
export class ShoppingListComponent { }
