import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentType } from '../models/DocumentType.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  documentTypes: DocumentType[];

  readonly apiURL = "http://localhost:8080/api/document-types";

  constructor(private readonly http: HttpClient) {
    this.documentTypes = [];
  }

  getAllDocumentTypes() {
    return this.http.get<DocumentType[]>(this.apiURL);
  }

  getDocumentTypeById(id: number): Observable<DocumentType> {
    return this.http.get<DocumentType>(`${this.apiURL}/${id}`)
  }

}
