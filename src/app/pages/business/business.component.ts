import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-business',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  constructor(public businessService: BusinessService){}
    ngOnInit(): void {
      this.getAllBusinesses();
    }
  
  getAllBusinesses(){
    this.businessService.getAllBusinesses().subscribe({
        next: (data) => {
          this.businessService.businesses = data;
        },
        error: (error) => {
          alert("No se pudo accerder a la API");
          console.log(error);
        }
    })
  }
}
