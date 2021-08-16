import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './componennt/front-page/front-page.component';
import { ItemComponent } from './componennt/item/item.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'app', component: AppComponent },
  { path: 'frontpgag', component: FrontPageComponent },
  // { path: 'item', component: ItemComponent },


  //  { path: '', redirectTo: 'app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
