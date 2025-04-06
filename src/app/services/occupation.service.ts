import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Occupation } from '../models/Occupation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  occupations: Occupation[];

  readonly apiURL = "http://localhost:8080/api/occupations";

  constructor(private readonly http: HttpClient) {
    this.occupations = [];
  }

  getAllOccupations() {
    return this.http.get<Occupation[]>(this.apiURL);
  }

  getOccupationById(id: number): Observable<Occupation> {
      return this.http.get<Occupation>(`${this.apiURL}/${id}`)
  }
  
}
