import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

const routes: Routes = [
  {path : '', component: HomeComponent, data:{breadcrumb:{label:'app home' , info:'home'}}},
  {path : 'shop' , loadChildren : () => import("./shop/shop.module").then(m => m.ShopModule) , 
   data:{breadcrumb:{ info:'shop'}}
  },
  {path: 'not-found' , component:NotFoundComponent},
  {path: 'server-error' , component:ServerErrorComponent},
  {path: '**' , component: HomeComponent , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
