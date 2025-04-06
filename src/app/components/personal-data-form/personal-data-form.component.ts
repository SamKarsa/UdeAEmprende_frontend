import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataService } from '../../services/personal-data.service';
import { DocumentTypeService } from '../../services/document-type.service';
import { EthnicityService } from '../../services/ethnicity.service';
import { OccupationService } from '../../services/occupation.service';
import { VulnerabilityService } from '../../services/vulnerability.service';
import { PersonalData } from '../../models/PersonalData.model';


@Component({
  selector: 'app-personal-data-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.css']
})
export class PersonalDataFormComponent  implements OnInit {
  personalData: PersonalData | null = null;
  currentUser: any;
  
  // Para mostrar nombres en lugar de IDs
  documentTypeName: string = '';
  ethnicityName: string = '';
  occupationName: string = '';
  vulnerabilityName: string = '';

  isLoading: boolean = true;

  constructor(
    private readonly personalDataService: PersonalDataService,
    private readonly documentTypeService: DocumentTypeService,
    private readonly ethnicityService: EthnicityService,
    private readonly occupationService: OccupationService,
    private readonly vulnerabilityService: VulnerabilityService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const userData = sessionStorage.getItem('createdUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
      this.loadPersonalData(this.currentUser.userId);
    } else {
      console.error('No se encontraron datos de usuario en sessionStorage');
      this.isLoading = false;
    }
  }

  loadPersonalData(userId: number): void {
    this.personalDataService.getPersonalDataByUserId(userId).subscribe({
      next: (data) => {
        this.personalData = data;
        this.loadAdditionalData();
      },
      error: (err) => {
        console.error('Error al cargar datos personales', err);
        this.isLoading = false;
      }
    });
  }

  loadAdditionalData(): void {
    if (!this.personalData) return;

    // Cargar nombres correspondientes a los IDs
    this.documentTypeService.getDocumentTypeById(this.personalData.documentTypeId).subscribe({
      next: (data) => this.documentTypeName = data.documentTypeName
    });

    this.ethnicityService.getEthnicityById(this.personalData.ethnicityId).subscribe({
      next: (data) => this.ethnicityName = data.ethnicityName
    });

    this.occupationService.getOccupationById(this.personalData.occupationId).subscribe({
      next: (data) => this.occupationName = data.occupationName
    });

    this.vulnerabilityService.getVulnerabilityById(this.personalData.vulnerabilityId).subscribe({
      next: (data) => {
        this.vulnerabilityName = data.vulnerabilityName;
        this.isLoading = false; // Finalizamos loading cuando terminamos todas las cargas
      }
    });
  }
}