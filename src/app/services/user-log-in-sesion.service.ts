import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogInSesion } from '../models/UserLogInSesion.model';

@Injectable({
  providedIn: 'root'
})
export class UserLogInSesionService {
  readonly userLogInSesionApiURL = "http://localhost:8080/api/userLogInSesion";

  constructor(private http: HttpClient) { }

  postUserLogInSesion(userLogInSesion: UserLogInSesion) {
    return this.http.post<UserLogInSesion>(this.userLogInSesionApiURL, userLogInSesion);
  }
}