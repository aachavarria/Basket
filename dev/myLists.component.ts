import {Component, ElementRef ,AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ShoppingListService} from './services/shoppingList.Service';
import {List} from './services/list';

declare var componentHandler: any;

@Component({
    selector: 'lists',
    template: `
    <div class="mdl-grid">
      <div class="list-card mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col" *ngFor="let list of lists; let i=index">
        <div class="mdl-card__title mdl-card--expand" [ngStyle]="{'background': list.image}">
          <h2 class="mdl-card__title-text">{{list.name}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <ul class="mdl-list">
            <li class="mdl-list__item" *ngFor="let item of list.items; let i=index">
              <span class="mdl-list__item-primary-content">
               {{item.name}}
              </span>
            </li>
          </ul>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a (click)="onSelectList(list)"class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View all items
          </a>
        </div>
      </div>
    </div>
    `,
    providers: [ShoppingListService]
})
export class MyLists implements AfterViewInit,OnInit{
  private lists:List[];

  constructor(private router: Router, private _shoppingListService: ShoppingListService){}

  ngOnInit(){
    this._shoppingListService.getLists().subscribe(lists => {
      this.lists = lists;
    },error =>console.log('done'));
  }

  onSelectList(list:List){
    this.router.navigate(['/list', list.id]);
  }

  ngAfterViewInit() {
      //componentHandler.upgradeAllRegistered();
  }
}
