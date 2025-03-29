import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FooterssComponent } from './components/footerss/footerss.component'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, FooterssComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UdeAemprende';
}
