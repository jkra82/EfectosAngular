import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routingtest',
  templateUrl: './routingtest.component.html',
  styleUrls: ['./routingtest.component.css']
})
export class RoutingtestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log ("RoutingtestComponent.ngOnInit");
  }

}
