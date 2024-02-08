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

@NgModule({
  declarations: [],
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
  ],
  exports : [
    ToastrModule,
    ModalModule,
    TooltipModule,
    BsDropdownModule,
    ButtonsModule,
    PaginationModule,
    AccordionModule,
    CollapseModule
  ]
})
export class SharedModule {

 }
