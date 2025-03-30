import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EthnicityService {

  ethnicities: any[];

  readonly apiURL = "http://localhost:8080/api/ethnicity";

  constructor(private http: HttpClient) {
    this.ethnicities = [];
  }

  getEthnicities() {
    return this.http.get<any[]>(this.apiURL);
  }

}
