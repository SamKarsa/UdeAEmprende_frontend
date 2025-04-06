import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ethnicity } from '../models/Ethnicity.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EthnicityService {

  ethnicities: Ethnicity[];

  readonly apiURL = "http://localhost:8080/api/ethnicity";

  constructor(private readonly http: HttpClient) {
    this.ethnicities = [];
  }

  getAllEthnicities() {
    return this.http.get<Ethnicity[]>(this.apiURL);
  }


  getEthnicityById(id: number): Observable<Ethnicity> {
    return this.http.get<Ethnicity>(`${this.apiURL}/${id}`)
  }

}
