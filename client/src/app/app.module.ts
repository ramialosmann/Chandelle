import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { QuickViewComponent } from './home/product-card/quick-view/quick-view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ShopComponent } from './shop/shop.component';
import { ShopProductCardComponent } from './shop/shop-product-card/shop-product-card.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductCardComponent,
    QuickViewComponent,
    ShopComponent,
    ShopProductCardComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(
      {positionClass : 'toast-bottom-right'}
    ),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass:ErrorInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
