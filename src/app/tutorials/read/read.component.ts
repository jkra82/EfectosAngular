import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService  } from "../../services/tutorial.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  // En el caso de que queramos subscribirnos a cualquier cambio en tutorials 
  private subscription: Subscription;

  constructor(private tutorialService: TutorialService) { 
    console.log("dentro del constructor");
    this.tutorials = tutorialService.tutorials;
  }
  
  delTutorial(index) {
    this.tutorialService.deleteTutorial(index);
  }

  ngOnInit() { 
    console.log("dentro del ngOnInet");
    //this.subscription = this.tutorialService.tutorials  ????? cual usar
    this.subscription = this.tutorials
      .subscribe( (tutorial:Tutorial[]) => {
          //console.log("dentro del subscribe " + tutorial[tutorial.length-1].name)
      }, error => {
        console.log("error del subscribe ")
      });

    //this.tutorials.loadTutorials(); ==> Para cuando las carguemos de algún repository
  }

  ngOnDestroy() {
    // Cuando se destruye el componente dessubcribimos la subscription
    this.subscription.unsubscribe();
  }

}
