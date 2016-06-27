import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ShoppingListService} from './services/shoppingList.service';
import {List} from './services/list';
import {Item} from './services/item';
import {MDL} from './materialDesignUpgradeElement';
import {ItemDetail} from './itemDetail.component';

@Component({
    selector: 'shopping-list',
    template: `
    <div class="sp-top-section">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text">
          <label class="mdl-textfield__label" for="sample1">{{list.name}}</label>
        </div>
        <div class="list-actions">
        <button class="mdl-button mdl-js-button mdl-button--icon">
          <i (click)="onAddItem()" class="material-icons">add</i>
        </button>
          <button class="mdl-button mdl-js-button mdl-button--icon">
            <i (click)="onShareList(list)" class="material-icons">share</i>
          </button>
          <button class="mdl-button mdl-js-button mdl-button--icon">
            <i (click)="onDeleteList(list)" class="material-icons">delete</i>
          </button>
        </div>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <ul class="list-items mdl-list" *ngIf="list.items">
          <li mdl class="mdl-list__item mdl-list__item--two-line" *ngFor="let item of list.items; let i=index">
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
    directives: [MDL,ItemDetail]
})
export class ShoppingListComponent implements OnInit {
  private list:List = <List>{};
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _shoppingListService: ShoppingListService){}


  onShareList(list:List) {

  };

  onDeleteList(list:List) {
    this.router.navigate(['/']);
  };

  onAddItem() {

  };

  onSaveItem(item:Item){

  };

  onEdit(item:Item) {
    this.router.navigate(['/list', this.list.id,'/item',item.id]);
  };

  onDelete(item:Item) {
    var index = this.list.items.indexOf(item);
    if (index >=0) {
      this.list.items.splice(index,1);
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let listId = +params['lid']; // (+) converts string 'id' to a number
         this._shoppingListService.getItems(listId).subscribe(list => {
           this.list = list;
         });
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
