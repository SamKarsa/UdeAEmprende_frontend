import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { BusinessDataFormComponent } from '../../components/business-data-form/business-data-form.component';

@Component({
  selector: 'app-business-data',
  imports: [HeaderComponent, FooterComponent, BusinessDataFormComponent],
  templateUrl: './business-data.component.html',
  styleUrl: './business-data.component.css'
})
export class BusinessDataComponent {

}
