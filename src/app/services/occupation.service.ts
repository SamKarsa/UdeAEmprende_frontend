
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Occupation } from '../models/Occupation.model';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  occupations: Occupation[];

  readonly apiURL = "http://localhost:8080/api/occupations";

  constructor(private http: HttpClient) {
    this.occupations = [];
  }

  getAllOccupations() {
    return this.http.get<Occupation[]>(this.apiURL);
  }
}
