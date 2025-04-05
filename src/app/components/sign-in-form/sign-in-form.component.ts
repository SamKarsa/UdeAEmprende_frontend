import { Component, OnInit } from '@angular/core';
import { EthnicityService } from '../../services/ethnicity.service';
import { VulnerabilityService } from '../../services/vulnerability.service';
import { OccupationService } from '../../services/occupation.service';
import { DocumentTypeService } from '../../services/document-type.service';
import { RouterLink } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { PersonalDataService } from '../../services/personal-data.service';
import { User } from '../../models/User.model';
import { RolService } from '../../services/role.service';
import { Role } from '../../models/Role.model';
import { PersonalData } from '../../models/PersonalData.model';

@Component({
  selector: 'app-sign-in-form',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  documentNumber: FormControl;
  phoneNumber: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  ethnicity: FormControl;
  occupation: FormControl;
  documentType: FormControl;
  vulnerability: FormControl;

  constructor(public ethnicityService: EthnicityService, public vulnerabilityService: VulnerabilityService, public occupationService: OccupationService, public documentTypeService: DocumentTypeService, public userService: UserService, public roleService: RolService, public personalDataService: PersonalDataService) {
    this.firstName = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/)]);
    this.documentNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{6,12}$/)]);
    this.phoneNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.ethnicity = new FormControl(null, Validators.required);
    this.occupation = new FormControl(null, Validators.required);
    this.documentType = new FormControl(null, Validators.required);
    this.vulnerability = new FormControl(null, Validators.required);


    this.signInForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      documentNumber: this.documentNumber,
      phoneNumber: this.phoneNumber,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      ethnicity: this.ethnicity,
      occupation: this.occupation,
      documentType: this.documentType,
      vulnerability: this.vulnerability,
    }, { validators: this.passwordMatchValidator });

  }

  ngOnInit(): void {
    this.getAllEthnicities();
    this.getAllVulnerabilities();
    this.getAllOccupations();
    this.getAllDocumentTypes();
    this.signInForm.get('password')?.valueChanges.subscribe(() => {
      this.signInForm.get('confirmPassword')?.updateValueAndValidity();
    });
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

  submitSignInForm() {
    this.postUser();
    // this.signInForm.reset();
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };




  postUser() {
    const userData: User = {
      email: this.signInForm.get('email')?.value,
      password: this.signInForm.get('password')?.value,
      userStatus: true
    };

    this.userService.postUser(userData).subscribe({
      next: (createdUser) => {
        console.log("The new user was created");
        const userId = createdUser.userId;
        this.postRole(userId);
      },
      error: (error) => {
        alert("Can't get access to api " + error);
        console.log(userData);
      }
    })

  }

  postRole(newUserId: number | undefined) {
    const userRoleData: Role = {
      userId: newUserId,
      userTypeId: this.signInForm.get('documentType')?.value
    };

    console.log(newUserId);

    this.roleService.postRole(userRoleData).subscribe({
      next: (createdRole) => {
        console.log("The new role was created");
        this.postPersonalData(newUserId!);
        console.log(createdRole);
      },
      error: (error) => {
        alert("Can't get access to api " + error);
        console.log(userRoleData);
      }
    })

  }

  postPersonalData(newUserId: number) {
    const personalData: PersonalData = {
      firstName: this.signInForm.get('firstName')?.value,
      lastNames: this.signInForm.get('lastName')?.value,
      identificationNumber: this.signInForm.get('documentNumber')?.value,
      phoneNumber: this.signInForm.get('phoneNumber')?.value,
      userId: newUserId,
      documentTypeId: this.signInForm.get('documentType')?.value,
      ethnicityId: this.signInForm.get('ethnicity')?.value,
      occupationId: this.signInForm.get('occupation')?.value,
      vulnerabilityId: this.signInForm.get('vulnerability')?.value
    };

    console.log(newUserId);

    this.personalDataService.postPersonalData(personalData).subscribe({
      next: (createdPersonalData) => {
        console.log("The new role was created");
        console.log(createdPersonalData);
      },
      error: (error) => {
        alert("Can't get access to api personal data " + error);
        console.log(personalData);
      }
    })


  }
}

