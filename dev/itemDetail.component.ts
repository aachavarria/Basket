import {Component, ElementRef, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Item } from './services/item';
import { MDL } from './materialDesignUpgradeElement';
import { ShoppingListService } from './services/shoppingList.service';

declare var componentHandler: any;

@Component({
    selector: 'item-detail',
    template: `
    <div mdl class="mdl-grid item-details">
      <div class="mdl-cell mdl-cell--3-col">
        <img src="http://placehold.it/200x200">
      </div>
      <div class="mdl-cell mdl-cell--9-col form-section">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" [ngClass]="{'default-label': item.name!=''}">
          <input class="mdl-textfield__input" type="text" id="fname" [(ngModel)]="item.name" >
          <label class="mdl-textfield__label" for="fname">Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" [ngClass]="{'default-label': item.description!=''}">
          <textarea class="mdl-textfield__input" type="text" rows= "1" id="fdescription" [(ngModel)]="item.description"></textarea>
          <label class="mdl-textfield__label" for="fdescription">Description</label>
        </div>
        <button (click)="onSave(item)" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Save
        </button>
        <button (click)="onCancel()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          Cancel
        </button>
      </div>
    </div>
    `,
    providers: [ShoppingListService],
    directives:[MDL]
})
export class ItemDetail implements OnInit {
    private item:Item = <Item>{};
    private sub: any;
    private listId:any;
    private itemId:any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _shoppingListService: ShoppingListService){}

    ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
         this.itemId = +params['iid']; // (+) converts string 'id' to a number
         this.listId = +params['lid'];
         this._shoppingListService.getItem(this.listId,this.itemId).subscribe(item => {
           this.item = item;
         });
       });
    }

    onSave(item:any){
      let editItem = {listId:this.listId, item: item}
      this._shoppingListService.editItem(editItem).subscribe(respond => {
        console.log(respond);
      });
    }

    onCancel(){
      this.router.navigate(['/list', this.listId]);
    }
}
