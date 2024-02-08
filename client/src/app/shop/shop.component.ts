import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/Product';
import { ProductBrand } from '../_models/ProductBrand';
import { ProductType } from '../_models/ProductType';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products : Product[] = [];
  brands : ProductBrand[] = [];
  types : ProductType[] = [];
  count : number | undefined;
  constructor(private productService : ProductService ) {

  }
  ngOnInit(): void {
   this.GetProducts();
   this.GetBrands();
   this.GetTypes();
  }
  GetBrands() {
    this.productService.GetBrands().subscribe({
      next : response => this.brands = response
    })
  }
  
  GetTypes() {
    this.productService.GetTypes().subscribe({
      next : x => this.types = x
    })
  }
  GetProducts() {
    this.productService.GetProducts().subscribe({
      next : response => {
        this.products = response.data;
        this.count = response.count;
      } 
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
