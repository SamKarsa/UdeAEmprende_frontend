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

  ngOnInit(): void {
    this.getAllCategories();
  }

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
