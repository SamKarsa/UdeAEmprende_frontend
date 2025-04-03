import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare const bootstrap: any;


@Component({
  selector: 'app-slider-home',
  imports: [CommonModule],
  templateUrl: './slider-home.component.html',
  styleUrl: './slider-home.component.css'
})
export class SliderHomeComponent implements AfterViewInit {
  @ViewChild('carousel') carouselElement!: ElementRef;
  private carouselInstance: any;

  // Datos de los slides (pueden venir de un servicio)
  slides = [
    {
      src: 'assets/slider_home/photo1.webp',
      alt: 'Descripción imagen 1',
      loading: 'eager' // Precarga solo la primera imagen
    },
    {
      src: 'assets/slider_home/photo2.webp',
      alt: 'Descripción imagen 2',
      loading: 'lazy'
    },
    {
      src: 'assets/slider_home/photo3.webp',
      alt: 'Descripción imagen 3',
      loading: 'lazy'
    }
  ];

  ngAfterViewInit() {
    // Espera a que Bootstrap esté disponible globalmente
    if (typeof bootstrap !== 'undefined') {
      this.initCarousel();
    } else {
      console.warn('Bootstrap no está cargado. Verifica tus scripts.');
    }
  }

  private initCarousel(): void {
    this.carouselInstance = new bootstrap.Carousel(this.carouselElement.nativeElement, {
      interval: 5000,
      ride: 'carousel',
      wrap: true
    });

    // Solución para el bug de la primera imagen
    setTimeout(() => {
      const _ = this.carouselElement.nativeElement.clientHeight; // Fuerza reflow
    }, 50);
  }

  // Métodos de control (opcionales)
  next(): void {
    this.carouselInstance.next();
  }

  prev(): void {
    this.carouselInstance.prev();
  }

  // Para actualizar slides dinámicamente
  updateSlides(newSlides: any[]): void {
    this.slides = newSlides;
    setTimeout(() => {
      this.carouselInstance.dispose();
      this.initCarousel();
    }, 0);
  }
}
