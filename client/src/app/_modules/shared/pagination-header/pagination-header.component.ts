import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.css']
})
export class PaginationHeaderComponent {

  @Input() count : number | undefined;
  @Input() PageNumber : number | undefined;
  @Input() PageSize : number | undefined;

}
