import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './services/shoppingListService';
import {Items} from './services/items';
@Component({
    selector: 'shopping-list',
    template: `
        <ul class="demo-list-control mdl-list">
          <li class="mdl-list__item" *ngFor="#item of items; let i=index">
            <span class="mdl-list__item-primary-content">
                <label [attr.for]="'chkbox' + (i+1)" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="chkbox{{i+1}}" class="mdl-checkbox__input">
                </label>
                <span>{{item.name}} - {{i+1}}</span>
            </span>
            <span class="mdl-list__item-secondary-action">
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">toc</i>
            </button>
            </span>
          </li>
        </ul>
    `,
    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{ 
  private items:Items[];
  
  constructor(private _shoppingListService: ShoppingListService){}
  
  ngOnInit(){
    this._shoppingListService.getItems().subscribe(items => {
      this.items = items;
    });
  }
}
