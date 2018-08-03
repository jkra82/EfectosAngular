import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataTestService {

  currentValue: number = 1;  
  public subject = new Subject<any>();

  initValues() {  
    var _this = this;
    setInterval(function() {
      _this.currentValue++;
      _this.subject.next(_this.currentValue);
    }, 2000);
  }

  getValues(): Observable<number> {
    return this.subject.asObservable();
  }
  
}
