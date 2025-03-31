import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ethnicity } from '../models/Ethnicity.model';


@Injectable({
  providedIn: 'root'
})
export class EthnicityService {

  ethnicities: Ethnicity[];

  readonly apiURL = "http://localhost:8080/api/ethnicity";

  constructor(private http: HttpClient) {
    this.ethnicities = [];
  }

  getAllEthnicities() {
    return this.http.get<Ethnicity[]>(this.apiURL);
  }

}
