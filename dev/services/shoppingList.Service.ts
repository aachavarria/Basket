import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS, URLSearchParams, Headers } from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Item} from './item';
import {List} from './list';


@Injectable()
export class ShoppingListService {
     data: any;
    private items = 'dev/data/items.json';
    private lists = 'dev/data/lists.json';
    private item = 'dev/data/item.json';
    constructor(private _http: Http){}

    getItems(id:any): Observable<List>{
      // let params = new URLSearchParams();
      // params.set('search', id);
      //   return this._http.get(this.items,{ search: params })
      //   .map(res => res.json());
      return this._http.get(this.items)
        .map(res => res.json());
    }

    editItem(newItem:any): Observable<any>{
      var headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      return this._http.post('/editItem', JSON.stringify(newItem),{headers}).cache();
    }


    getItem(listId:any,itemId:any): Observable<Item>{
        return this._http.get(this.item)
        .map(res => res.json());
    }

    getLists(): Observable<List[]>{
        return this._http.get(this.lists)
        .map(res => res.json());
    }
}
