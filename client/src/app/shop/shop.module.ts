import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopProductCardComponent } from './shop-product-card/shop-product-card.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { QuickViewComponent } from '../quick-view/quick-view.component';
import { FormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../_modules/shared.module';



@NgModule({
  declarations: [
    ShopComponent,
    ShopProductCardComponent,
    ProductDetailComponent,
    QuickViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ShopRoutingModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ShopRoutingModule,
  ]
})
export class ShopModule { }
