import { Component, OnInit } from '@angular/core';

import { TutorialService } from './services/tutorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';

  constructor(private tutorialService: TutorialService) { 
  }

  ngOnInit() {
    this.tutorialService.loadTutorials();
  }
}
