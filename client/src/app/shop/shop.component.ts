import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/Product';
import { ProductBrand } from '../_models/ProductBrand';
import { ProductType } from '../_models/ProductType';
import { ShopQueryApiParams } from '../_models/ShopQueryApiParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // html related variables and objects
  isBrandsCollapsed = true;
  isTypesCollapsed = true;
  isSortCollapsed = true;
  sortOptions = [ 
    {name : "A-Z" , value : "name"},
    {name : "Price : Low to high" , value : "priceAsc"},
    {name : "Price : High to low " , value : "priceDesc"}
]

  // objects to get from API server
  products : Product[] = [];
  brands : ProductBrand[] = [];
  types : ProductType[] = [];
  count = 0;

  // filtering related object

   queryParams = new ShopQueryApiParams();

  
  constructor(private productService : ProductService ) {

  }
  ngOnInit(): void {
   this.GetProducts();
   this.GetBrands();
   this.GetTypes();
  }
  GetBrands() {
    this.productService.GetBrands().subscribe({
      next : response => this.brands = [{id : 0 , name : "All"} , ...response]
    })
  }
  
  GetTypes() {
    this.productService.GetTypes().subscribe({
      next : response => this.types = [{id : 0 , name : "All"} , ...response]
    })
  }
  GetProducts() {
    this.productService.GetProducts(this.queryParams).subscribe({
      next : response => {
        this.products = response.data;
        this.count = response.count;
        this.queryParams.PageNumber = response.pageIndex;
        this.queryParams.PageSize = response.pageSize;
      } 
    })
  }

  SelectBrand(brandId : number) {
    this.queryParams.BrandId = brandId;
    this.GetProducts();
  }
  SelectType(typeId : number) {
    this.queryParams.TypeId = typeId;
    this.GetProducts();
  }
  SortBy(event : any) {
    this.queryParams.SortBy = event.target.value;
    this.GetProducts();
  }

  ResetFilters() {
    this.queryParams.BrandId = 0;
    this.queryParams.TypeId = 0;
    this.queryParams.SortBy = "name";
    this.GetProducts();
    
  }

  ChangePange(event : any) {
    if(this.queryParams.PageNumber !== event.page) {
      this.queryParams.PageNumber = event.page;
      this.GetProducts();
    }
  }

}
