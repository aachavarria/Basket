import {Component, ElementRef ,AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ShoppingListService} from './services/shoppingList.Service';
import {List} from './services/list';
import {MDL} from './materialDesignUpgradeElement';
import {modalComponent} from './modal.component';

declare var componentHandler: any;

@Component({
    selector: 'lists',
    template: `
    <div class="mdl-grid">
      <div class="list-card mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
        <div class="new-list-box" (click)="onNew()"></div>
      </div>
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
    <modal-edit [item]='add_list' (onSave)='onSave($event)' (onCancel)='onCancel($event)'>
      <h4 class="mdl-dialog__title">New List</h4>
    </modal-edit>
    `,
    providers: [ShoppingListService],
    directives: [MDL,modalComponent]
})
export class MyLists implements AfterViewInit,OnInit{
  private lists:List[];
  public add_list = false;

  constructor(private router: Router, private _shoppingListService: ShoppingListService){}

  ngOnInit(){
    this._shoppingListService.getLists().subscribe(lists => {
      this.lists = lists;
    },error =>console.log('done'));
  }

  onSelectList(list:List){
      console.log(list);
    this.router.navigate(['/list', list.id]);
  }

  onNew() {
    this.add_list = true;
  }

  onSave(item:any){
    if (!item) {
      this.add_list = false;
    } else {
      var newList = {
        "name":item,
        "id":this.lists.length + 1,
        "image":"url('https://placeholdit.imgix.net/~text?txtsize=19&txt=155%C3%97133&w=200&h=200')"
      };
      this.lists.push(newList);
      this.add_list = false;
      console.log(this.lists);
    }
  };
  onCancel(item:any){
    this.add_list = item;
  };

  ngAfterViewInit() {
      //componentHandler.upgradeAllRegistered();
  }
}
