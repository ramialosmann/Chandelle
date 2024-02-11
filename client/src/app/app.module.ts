import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { QuickViewComponent } from './home/product-card/quick-view/quick-view.component';

import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './_interceptors/error.interceptor';

import { ShopComponent } from './shop/shop.component';
import { ShopProductCardComponent } from './shop/shop-product-card/shop-product-card.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './_modules/shared/shared.module';
import { HeaderComponent } from './header/header.component';




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
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule

  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass:ErrorInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
