import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';;
import { take } from 'rxjs';
import { Product } from 'src/app/_models/Product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

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

