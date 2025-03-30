import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { EthnicityService } from '../../services/ethnicity.service';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  constructor(public ethnicityService: EthnicityService) { }
  ngOnInit(): void {
    this.getEthnicities();
  }

  getEthnicities() {
    this.ethnicityService.getEthnicities().subscribe({
      next: (data) => {
        this.ethnicityService.ethnicities = data;
      },
      error: (error) => {
        alert("No se pudo acceder a la api...");
        console.log(error);
      }
    })
  }

}
