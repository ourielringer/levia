import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './component/front-page/front-page.component';
import { ItemComponent } from './component/item/item.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'app', component: AppComponent }, 
  { path: 'frontpgag', component: FrontPageComponent }, 
  { path: 'payment', component: PaymentComponent }, 
  // { path: 'item', component: ItemComponent },


  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
