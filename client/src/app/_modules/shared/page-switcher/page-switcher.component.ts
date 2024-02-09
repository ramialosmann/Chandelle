import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-switcher',
  templateUrl: './page-switcher.component.html',
  styleUrls: ['./page-switcher.component.css']
})
export class PageSwitcherComponent {
  @Input() count : number | undefined;
  @Input() PageSize : number | undefined;
  @Output() ChangePage = new EventEmitter<number>();


  onPageChange(event : any) {
    this.ChangePage.emit(event.page);
  }

}
