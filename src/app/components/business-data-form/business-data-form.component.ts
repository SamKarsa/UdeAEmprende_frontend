import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-business-data-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './business-data-form.component.html',
  styleUrl: './business-data-form.component.css'
})
export class BusinessDataFormComponent {

  constructor(public categoryService: CategoryService) { }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categoryService.categories = data;
      },
      error: (error) => {
        alert("The getAllCategories API could not be accessed.");
        console.log(error);
      }

    })
  }

}
