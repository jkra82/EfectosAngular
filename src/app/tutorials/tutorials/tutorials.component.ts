import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CreateComponent } from '../create/create.component';
import { ReadComponent } from '../read/read.component';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
