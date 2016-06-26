import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Items} from './items';


@Injectable()
export class ShoppingListService {
     data: any;
    private url = 'dev/data/list.json';
    constructor(private _http: Http){}

    getItems(): Observable<Items[]>{
        return this._http.get(this.url)
        .map(res => res.json());
    }
}