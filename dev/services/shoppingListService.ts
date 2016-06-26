import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
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

    getItems(): Observable<Item[]>{
        return this._http.get(this.items)
        .map(res => res.json());
    }

    getLists(): Observable<List[]>{
        return this._http.get(this.lists)
        .map(res => res.json());
    }
}
