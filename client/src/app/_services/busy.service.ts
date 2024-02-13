import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  constructor(private spinner : NgxSpinnerService) {

  }

  Busy() {
    this.busyRequestCount++;
    this.spinner.show( undefined , 
      {
        bdColor : 'rgba(0 , 0 , 0  , 0.9)'
      }
    );
  }

  Idle() {
    this.busyRequestCount--;
    if(this.busyRequestCount <=0) {
      this.busyRequestCount = 0;
      this.spinner.hide();
    }
  }
}
