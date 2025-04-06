import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalData } from '../models/PersonalData.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  readonly personalDataApiURL = "http://localhost:8080/api/personal-data";

  constructor(private readonly http: HttpClient) { }

  postPersonalData(personalData: PersonalData) {
    return this.http.post<PersonalData>(this.personalDataApiURL, personalData);
  }

  getPersonalDataByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.personalDataApiURL}/user/${userId}`); 
  }

  getPersonalDataById(id: number): Observable<PersonalData> {
    return this.http.get<PersonalData>(`${this.personalDataApiURL}/${id}`);
  }
}
