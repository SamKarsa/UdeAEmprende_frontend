import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/Role.model';


@Injectable({
  providedIn: 'root'
})
export class RolService {
  readonly rolesApiURL = "http://localhost:8080/api/roles"

  constructor(private http: HttpClient) { }

  postRole(role: Role) {
    return this.http.post<Role>(this.rolesApiURL, role);
  }
}

