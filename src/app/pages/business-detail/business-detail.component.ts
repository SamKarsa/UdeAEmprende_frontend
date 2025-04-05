import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BusinessService } from '../../services/business.service';
import { Business } from '../../models/Business.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-business-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './business-detail.component.html',
  styleUrl: './business-detail.component.css'
})
export class BusinessDetailComponent implements OnInit{
  business?: Business;
  loading = true;
  error = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly businessService: BusinessService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBusiness(id);
  }

  loadBusiness(id: number) {
    this.businessService.getBusinessById(id).subscribe({
      next: (business) => {
        this.business = business;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  changeMainImage(image: { imageId: number }) {
    if (this.business?.images?.length) {
      // Intercambia la imagen principal con la clickeada
      const clickedIndex = this.business.images.findIndex(img => img.imageId === image.imageId);
      if (clickedIndex > -1) {
        [this.business.images[0], this.business.images[clickedIndex]] = 
          [this.business.images[clickedIndex], this.business.images[0]];
      }
    }
  }
}
