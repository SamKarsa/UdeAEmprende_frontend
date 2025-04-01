import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly userApiURL = "http://localhost:8080/api/user";

  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post<User>(this.userApiURL, user);
  }
}
