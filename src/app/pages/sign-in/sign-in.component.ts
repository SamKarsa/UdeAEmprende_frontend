import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { EthnicityService } from '../../services/ethnicity.service';
import { VulnerabilityService } from '../../services/vulnerability.service';
import { OccupationService } from '../../services/occupation.service';
import { DocumentTypeService } from '../../services/document-type.service';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  constructor(public ethnicityService: EthnicityService, public vulnerabilityService: VulnerabilityService, public occupationService: OccupationService, public documentTypeService: DocumentTypeService) { }
  ngOnInit(): void {
    this.getAllEthnicities();
    this.getAllVulnerabilities();
    this.getAllOccupations();
    this.getAllDocumentTypes();
  }

  getAllEthnicities() {
    this.ethnicityService.getAllEthnicities().subscribe({
      next: (data) => {
        this.ethnicityService.ethnicities = data;
      },
      error: (error) => {
        alert("No se pudo acceder a la api");
        console.log(error);
      }
    })
  }

  getAllVulnerabilities() {
    this.vulnerabilityService.getAllVulnerabilities().subscribe({
      next: (data) => {
        this.vulnerabilityService.vulnerabilities = data;
      },
      error: (error) => {
        alert("No se pudo acceder a la api");
        console.log(error);
      }

    })
  }

  getAllOccupations() {
    this.occupationService.getAllOccupations().subscribe({
      next: (data) => {
        this.occupationService.occupations = data;
      },
      error: (error) => {
        alert("No se pudo acceder a la api");
        console.log(error);
      }

    })
  }

  getAllDocumentTypes() {
    this.documentTypeService.getAllDocumentTypes().subscribe({
      next: (data) => {
        this.documentTypeService.documentTypes = data;
      },
      error: (error) => {
        alert("No se pudo acceder a la api");
        console.log(error);
      }

    })
  }

}
