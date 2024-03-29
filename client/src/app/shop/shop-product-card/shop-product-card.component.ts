import { Component, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/_models/Product';


@Component({
  selector: 'app-shop-product-card',
  templateUrl: './shop-product-card.component.html',
  styleUrls: ['./shop-product-card.component.css']
})
export class ShopProductCardComponent {

  @Input() product : Product | undefined;
 
  quickviewModalRef? : BsModalRef;
  addtocartModalRef? : BsModalRef;
  closed = false;
 
  constructor(private modalService : BsModalService , private router : Router) {
 
  }
 
   
   NavigateToProductDetail(id : number) {
      this.router.navigateByUrl(`/shop/${id}`)
   }
 
 
 
 
   quickviewModal(template: TemplateRef<void>) {
   this. quickviewModalRef = this.modalService.show(template);
   }
 
   closequickview(event : boolean) {
     this.closed = event;
     if(this.closed == event) {
     this.quickviewModalRef?.hide();
   }
   }
 }
