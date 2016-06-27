import { provideRouter, RouterConfig } from '@angular/router';
import { ShoppingListComponent} from './shoppingList.component';
import { MyLists} from './myLists.component';
import { ItemDetail} from './itemDetail.component';

export const routes: RouterConfig = [
  { path: '', component: MyLists },
  { path: 'list', component: ShoppingListComponent },
  { path: 'list/:lid/item/:iid', component: ItemDetail },
  { path: 'list/:lid', component: ShoppingListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
