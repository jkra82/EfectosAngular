import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { TutorialService } from './services/tutorial.service';
import { DataTestService } from './services/datatest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'app';
  private suscription: Subscription;
  value: number;

  constructor(
    private tutorialService: TutorialService,
    private dataTestService: DataTestService) { 
  }

  ngOnInit() {
    this.tutorialService.loadTutorials();
    this.dataTestService.initValues();
    this.suscription = this.dataTestService.getValues().subscribe(newValue => {
      this.value = newValue;
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}
