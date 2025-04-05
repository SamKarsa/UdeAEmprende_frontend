import { Component } from '@angular/core';
import { SliderHomeComponent } from '../../components/slider-home/slider-home.component';
import { CategoryService } from '../../services/category.service';



@Component({
  selector: 'app-home',
  imports: [SliderHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public categoryService: CategoryService) { }
    ngOnInit(): void {
      this.getAllCategories();
    }
  
    getAllCategories() {
      this.categoryService.getAllCategories().subscribe({
        next: (data) => {
          this.categoryService.categories = data;
        },
        error: (error) => {
          alert("No se pudo acceder a la api");
          console.log(error);
        }
  
      })
    }

}
