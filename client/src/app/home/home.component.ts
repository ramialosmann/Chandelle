import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/Product';
import { ShopQueryApiParams } from '../_models/ShopQueryApiParams';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Product[] = [];
  queryParams = new ShopQueryApiParams();

  //links
  phonenumber = "+96111111111";
  facebookLink = "https://www.facebook.com/profile.php?id=100062869006254";
  instagramLink = "https://www.instagram.com/chandelle_the.art.of.candles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  constructor(private productService : ProductService ) {

  }
  ngOnInit(): void {
   this.GetProducts();
  }
  
  GetProducts() {
    this.productService.GetProducts(this.queryParams).subscribe({
      next : response => this.products = response.data
    })
  }


}
