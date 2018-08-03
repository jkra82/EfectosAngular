import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataTestService } from '../../services/datatest.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-routingtest',
  templateUrl: './routingtest.component.html',
  styleUrls: ['./routingtest.component.css']
})
export class RoutingtestComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  value: number = 0;

  constructor(private dataTestService: DataTestService) { }

  ngOnInit() {
    console.log ("RoutingtestComponent.ngOnInit");
    this.subscription = this.dataTestService.getValues().subscribe(newValue => {
      this.value = newValue;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
