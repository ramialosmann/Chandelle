import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { PageSwitcherComponent } from './page-switcher/page-switcher.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    PaginationHeaderComponent,
    PageSwitcherComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(
      {positionClass : 'toast-bottom-right'}
    ),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgxSpinnerModule.forRoot({type : 'fire'})
  ],
  exports : [
    ToastrModule,
    ModalModule,
    TooltipModule,
    BsDropdownModule,
    ButtonsModule,
    PaginationModule,
    AccordionModule,
    CollapseModule,
    PaginationHeaderComponent,
    PageSwitcherComponent,
    TypeaheadModule,
    NgxSpinnerModule
  ]
})
export class SharedModule {

 }
