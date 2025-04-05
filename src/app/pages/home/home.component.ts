import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  constructor(
    public categoryService: CategoryService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCategories();

    // Inicializa el carousel con Bootstrap cuando el componente se carga
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const carousel = document.getElementById('mainCarousel');
        if (carousel) {
          // @ts-ignore - Si estás usando TypeScript strict
          new bootstrap.Carousel(carousel, {
            interval: 5000, // 5 segundos por slide
            ride: 'carousel',
            pause: 'hover'
          });
        }
      }
    }, 0);


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

  navigateToBusinesses(categoryId?: number) {
    if (categoryId) {
      this.router.navigate(['/business'], { 
        queryParams: { category: categoryId } 
      });
    } else {
      this.router.navigate(['/business']);
    }
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-in']);
  }

}
