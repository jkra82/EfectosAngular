import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

@Injectable()
export class DataTestService {

  currentValue: Observable<number>;  

  constructor(     
    ) {
    //
  }
}
