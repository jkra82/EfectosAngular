import { Injectable } from '@angular/core';
import { Observable, Observer, Subject, BehaviorSubject} from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri = 'http://localhost:3000/api/users';
  private _users: BehaviorSubject<User[]> = new BehaviorSubject([]);  
  public users$ = this._users.asObservable();

  constructor(private http: HttpClient) { 
    this.getUsers();
  }  

  getUsers(): Observable<User[]> {
    this.http.get(`${this.uri}`).subscribe(
      (data: User[]) => { this._users.next(data); },
      error => { console.log('Getting user Error: ' + error) }
    );

    return this._users.asObservable();
  }

  addUser(user_name, user_country) {
    const obj = {
        user_name: user_name,
        user_country: user_country
    };

    this.http.post(`${this.uri}/add`, obj)
      .subscribe(
        () => this.getUsers(), 
        res => console.log('addUser: Error')
      );
  }

  editUser(id) {
    return this.http.get(`${this.uri}/edit/${id}`)
      .subscribe(
        () => this.getUsers(),
        error => console.log('editUser: Error' + error)
      );
  }

  updateUser(user_name, user_country, id) {

    const obj = {
      user_name: user_name,
      user_country: user_country
    };

    this
      .http.post(`${this.uri}/update/${id}`, obj)
        .subscribe(
          () => this.getUsers(),
          error => console.log('updateUser: Error' + error)
        );
  }

  deleteUser(id) {
    this.http.get(`${this.uri}/delete/${id}`)
      .subscribe(
        () => this.getUsers(),
        error => console.log('deleteUser' + error)
      );
  }

}
