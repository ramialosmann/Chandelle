import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/Product';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product | undefined;
  constructor(private productService : ProductService, private route : ActivatedRoute, private bcService : BreadcrumbService) {
     bcService.set('@productDetail' , ' ');
  }
  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;
    this.productService.GetProductById(+id).subscribe({
      next : product => {
        this.product = product;
        this.bcService.set('@productDetail' , product.name)
      }
    })
  }



}
