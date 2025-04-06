import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';
  isLoggedIn: boolean = false;
  userEmail: string | null = null;

  constructor(public categoryService: CategoryService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.checkAuthStatus();
  }

  // Check if there is an authenticated user
  checkAuthStatus(): void {
    const userData = sessionStorage.getItem('createdUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.isLoggedIn = user.userStatus; // We use userStatus to validate
      this.userEmail = user.email; // We save the email to show it
    }
  }

  // Log Out
  logout(): void {
    sessionStorage.removeItem('createdUser');
    this.isLoggedIn = false;
    this.userEmail = null;
    this.router.navigate(['/']); // Redirects to the beginning
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
