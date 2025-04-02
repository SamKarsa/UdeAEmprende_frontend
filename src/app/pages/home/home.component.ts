import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { CategoryService } from '../../services/category.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent,RouterLink],
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
