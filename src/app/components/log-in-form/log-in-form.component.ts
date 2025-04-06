import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { UserLogInSesion } from '../../models/UserLogInSesion.model';
import { UserLogInSesionService } from '../../services/user-log-in-sesion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in-form',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './log-in-form.component.html',
  styleUrl: './log-in-form.component.css'
})
export class LogInFormComponent implements OnInit {

  LogInForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(public userLogInSesionService: UserLogInSesionService, private router: Router) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.LogInForm = new FormGroup({
      email: this.email,
      password: this.password
    });

  }
  ngOnInit(): void {

  }

  submitLogInForm() {
    this.postUserLogInSesion();

  }

  postUserLogInSesion() {
    const userLogInData: UserLogInSesion = {
      email: this.LogInForm.get('email')?.value,
      password: this.LogInForm.get('password')?.value,
    };

    this.userLogInSesionService.postUserLogInSesion(userLogInData).subscribe({
      next: (createdUser) => {
        console.log("El fokin usuario se creo y el email es : " + createdUser.email);
        console.log(createdUser);
        if (createdUser.email != "Email3Not@Found.") {
          sessionStorage.setItem('createdUser', JSON.stringify({
            email: createdUser.email,
            userId: createdUser.userId,
            userStatus: createdUser.userStatus
          })
          );
          window.location.href = '/';
        }
      },
      error: (error) => {
        alert("Can't get access to api postUserLogInSession " + error);
        console.log(userLogInData);
      }
    })

  }

}
