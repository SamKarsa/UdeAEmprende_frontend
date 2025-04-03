import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PersonalDataFormComponent } from '../../components/personal-data-form/personal-data-form.component';

@Component({
  selector: 'app-personal-data',
  imports: [HeaderComponent, FooterComponent, PersonalDataFormComponent],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {

}
