import { Component, OnInit } from '@angular/core';

import { ProductService } from '../_services/product.service';
import { Pagination } from '../_models/Pagination';
import { Product } from '../_models/Product';
import { ShopQueryApiParams } from '../_models/ShopQueryApiParams';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Product[] = [];
  radioModel = 'Cheapest';
  modelGroupDisabled=false;
  queryParams = new ShopQueryApiParams();
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
