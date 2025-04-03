import { Injectable } from '@angular/core';
import { Business } from '../models/Business.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  businesses: Business[];

  readonly apiURL = "http://localhost:8080/api/business";

  constructor(private readonly http: HttpClient) {
    this.businesses = [];
  }

  getAllBusinesses() {
    return this.http.get<Business[]>(this.apiURL);
  }

  // Añade este nuevo método para obtener un negocio por ID
  getBusinessById(id: number): Observable<Business> {
    return this.http.get<Business>(`${this.apiURL}/${id}`);
  }
}
