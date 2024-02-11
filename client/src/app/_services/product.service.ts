import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Pagination } from '../_models/Pagination';
import { Product } from '../_models/Product';
import { ProductBrand } from '../_models/ProductBrand';
import { ProductType } from '../_models/ProductType';
import { ShopQueryApiParams } from '../_models/ShopQueryApiParams';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;
  constructor(private http : HttpClient ) {

  } 


  GetProducts(queryParams : ShopQueryApiParams) {
    let params = new HttpParams();
    if(queryParams.BrandId > 0) {
      params = params.append('brandId' , queryParams.BrandId);
    }
    if(queryParams.TypeId > 0) {
      params = params.append('typeId' , queryParams.TypeId);
    }
      params = params.append('sort' , queryParams.SortBy);
      params = params.append('pageSize' , queryParams.PageSize);
      params = params.append('pageIndex' , queryParams.PageNumber);
      if(queryParams.search.length > 1) {
      params = params.append('search' , queryParams.search);
      }
   


    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products' , {params});
  }


  GetBrands() {
    return this.http.get<ProductBrand[]>(this.baseUrl + 'products/brands');
  }
  GetTypes() {
    return this.http.get<ProductType[]>(this.baseUrl + 'products/types');
  }





}
