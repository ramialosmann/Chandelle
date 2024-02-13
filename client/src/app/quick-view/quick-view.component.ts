import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/_models/Product';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent {
   @Input() product : Product | undefined;
   @Output() close = new EventEmitter();


   CloseModal() {
    this.close.emit(true)
   }
}
