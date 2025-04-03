import { Injectable } from '@angular/core';
import { Business } from '../models/Business.model';
import { HttpClient } from '@angular/common/http';

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
}
