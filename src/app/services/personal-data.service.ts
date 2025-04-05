import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalData } from '../models/PersonalData.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  readonly personalDataApiURL = "http://localhost:8080/api/personal-data";

  constructor(private http: HttpClient) { }

  postPersonalData(personalData: PersonalData) {
    return this.http.post<PersonalData>(this.personalDataApiURL, personalData);
  }
}
