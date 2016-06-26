import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './services/shoppingList.service';
import {Item} from './services/item';
import {MDL} from './materialDesignUpgradeElement';

@Component({
    selector: 'shopping-list',
    template: `
    <div class="sp-top-section">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="sample1">
          <label class="mdl-textfield__label" for="sample1">List Name</label>
        </div>
        <div class="list-actions">
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i (click)="onDelete(item)" class="material-icons">add</i>
        </button>
          <button class="mdl-button mdl-js-button mdl-button--icon">
            <i (click)="onDelete(item)" class="material-icons">share</i>
          </button>
          <button class="mdl-button mdl-js-button mdl-button--icon">
            <i (click)="onDelete(item)" class="material-icons">delete</i>
          </button>
        </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <ul class="list-items mdl-list">
          <li mdl class="mdl-list__item mdl-list__item--two-line" *ngFor="let item of items; let i=index">
            <span class="mdl-list__item-primary-content">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" [ngModel]="item.status" class="mdl-checkbox__input" (change)="item.status=!item.status">
                </label>
                <span [ngClass]="{ 'is-checked': item.status}" >{{item.name}}</span>
                <span class="mdl-list__item-sub-title">{{item.description}}</span>
            </span>
            <span class="mdl-list__item-secondary-action">
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i (click)="onEdit(item)" class="material-icons">edit</i>
            </button>
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i (click)="onDelete(item)" class="material-icons">delete</i>
            </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
    `,
    providers: [ShoppingListService],
    directives: [MDL]
})
export class ShoppingListComponent implements OnInit{
  private items:Item[];

  constructor(private _shoppingListService: ShoppingListService){}

  ngOnInit(){
    this._shoppingListService.getItems().subscribe(items => {
      this.items = items;
    });
  }
}
