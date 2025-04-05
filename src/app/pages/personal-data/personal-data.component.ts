import { Component } from '@angular/core';
import { PersonalDataFormComponent } from '../../components/personal-data-form/personal-data-form.component';

@Component({
  selector: 'app-personal-data',
  imports: [PersonalDataFormComponent],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {

}
