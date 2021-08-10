import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './componennt/front-page/front-page.component';
import { ItemComponent } from './componennt/item/item.component';

const routes: Routes = [

  { path: 'frontpgag', component: FrontPageComponent},
  { path: 'item', component: ItemComponent},

  
    { path: '',   redirectTo: '/frontpgag', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
