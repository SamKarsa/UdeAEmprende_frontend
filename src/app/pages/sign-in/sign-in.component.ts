import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EthnicityService } from '../../services/ethnicity.service';
import { VulnerabilityService } from '../../services/vulnerability.service';
import { OccupationService } from '../../services/occupation.service';
import { DocumentTypeService } from '../../services/document-type.service';
import { SignInFormComponent } from '../../components/sign-in-form/sign-in-form.component';

@Component({
  selector: 'app-sign-in',
  imports: [SignInFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor() { }
}
