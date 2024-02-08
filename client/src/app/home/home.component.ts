import { Component, OnInit } from '@angular/core';

import { ProductService } from '../_services/product.service';
import { Pagination } from '../_models/Pagination';
import { Product } from '../_models/Product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Product[] = [];
  radioModel = 'Cheapest';
  modelGroupDisabled=false;

  constructor(private productService : ProductService ) {

  }
  ngOnInit(): void {
   this.GetProducts();
  }
  
  GetProducts() {
    this.productService.GetProducts().subscribe({
      next : response => this.products = response.data
    })
  }

  SortProducts(sortBy: string, brandId?: number, typeId?: number) {
    this.productService.SortProducts(sortBy, brandId, typeId).subscribe({
        next: response => {
           this.products = response.data 
          }
    });
}

}
