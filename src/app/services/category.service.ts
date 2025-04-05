import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  readonly apiURL = "http://localhost:8080/api/category";

  constructor(private readonly http: HttpClient) {
    this.categories = [];
  }

  getAllCategories() {
    return this.http.get<Category[]>(this.apiURL);
  }
}
