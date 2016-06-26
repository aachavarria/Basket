import { provideRouter, RouterConfig } from '@angular/router';
import { ShoppingListComponent} from './shoppingList.component';
import { MyLists} from './myLists.component';
import { ItemDetail} from './itemDetail.component';

export const routes: RouterConfig = [
  { path: '', component: MyLists },
  { path: 'list', component: ShoppingListComponent },
  { path: 'list:id', component: ShoppingListComponent },
  { path: 'list/item:id', component: ItemDetail }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
