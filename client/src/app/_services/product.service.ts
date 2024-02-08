import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Pagination } from '../_models/Pagination';
import { Product } from '../_models/Product';
import { ProductBrand } from '../_models/ProductBrand';
import { ProductType } from '../_models/ProductType';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;
  constructor(private http : HttpClient ) {

  } 

  GetProducts() {
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products?pageSize=50');
  }

  SortProducts(sortBy: string, brandId?: number, typeId?: number) {
    let url = this.baseUrl + 'products?sort=' + sortBy;
    if (brandId !== undefined) {
        url += '&brandId=' + brandId;
    }
    if (typeId !== undefined) {
        url += '&typeId=' + typeId;
    }
    url += '&pageSize=50';
    return this.http.get<Pagination<Product[]>>(url);
  }


  GetBrands() {
    return this.http.get<ProductBrand[]>(this.baseUrl + 'products/brands');
  }
  GetTypes() {
    return this.http.get<ProductType[]>(this.baseUrl + 'products/types');
  }





}
