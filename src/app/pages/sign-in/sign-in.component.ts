import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SignInFormComponent } from '../../components/sign-in-form/sign-in-form.component';
@Component({
  selector: 'app-sign-in',
  imports: [HeaderComponent, FooterComponent, SignInFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor() { }
}
