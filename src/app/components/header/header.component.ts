import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(public categoryService: CategoryService, 
    private readonly router: Router
  ) { }

<<<<<<< HEAD
  constructor(public categoryService: CategoryService) {
  }
=======
>>>>>>> 4fd6f0c13a724be1f67a5310379ab43cce9bb3fc
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

  onCategorySelect(categoryId: number) {
    this.router.navigate(['/business'], { 
      queryParams: { category: categoryId } 
    });
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/business'], {
        queryParams: { search: this.searchQuery.trim() }
      });
    }
  }
}
