import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { CartItem } from 'src/app/_models/CartItem';
import { Product } from 'src/app/_models/Product';
import { CartService } from 'src/app/_services/cart.service';

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
 
  constructor(private modalService : BsModalService) {
 
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
