import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogInFormComponent } from "../../components/log-in-form/log-in-form.component";

@Component({
  selector: 'app-log-in',
  imports: [LogInFormComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

}
