import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../services/users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  public users$: Observable<User[]>;

  ngOnInit() {    
    this.users$ = this.userService.getUsers();
  }

  addUser(name: string, country: string) {
    if (name != "" && country != "") {
      this.userService.addUser(name, country);
    }
    else {
      // Sacar mensaje de error
    }
  }

  deleteUser(userId: any) {
    this.userService.deleteUser(userId);
  }

}
