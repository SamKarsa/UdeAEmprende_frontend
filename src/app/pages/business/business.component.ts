import { Component } from '@angular/core';
import { BusinessService } from '../../services/business.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business',
  imports: [RouterLink, CommonModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  searchQuery: string = '';

  constructor(
    public businessService: BusinessService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category'];
      const searchQuery = params['search']; // Nuevo parámetro
  
      if (categoryId) {
        this.getBusinessesByCategory(categoryId);
      } else if (searchQuery) {
        this.searchQuery = searchQuery; // Sincroniza con el campo de búsqueda
        this.onSearch(); // Ejecuta la búsqueda
      } else {
        this.getAllBusinesses();
      }
    });
  }

  getAllBusinesses() {
    this.businessService.getAllBusinesses().subscribe({
      next: (data) => {
        this.businessService.businesses = data;
      },
      error: (error) => {
        alert("No se pudo acceder a la API");
        console.log(error);
      }
    });
  }

  getBusinessesByCategory(categoryId: number) {
    this.businessService.getBusinessesByCategory(categoryId).subscribe({
      next: (data) => {
        this.businessService.businesses = data;
      },
      error: (error) => {
        alert("No se pudo filtrar por categoría");
        console.log(error);
      }
    });
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.businessService.searchBusinesses(this.searchQuery).subscribe({
        next: (data) => {
          this.businessService.businesses = data;
        },
        error: (error) => {
          console.error('Error searching businesses:', error);
        }
      });
    } else {
      this.getAllBusinesses();
    }
  }
}
