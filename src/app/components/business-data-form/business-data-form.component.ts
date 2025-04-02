import { Component } from '@angular/core';

@Component({
  selector: 'app-business-data-form',
  imports: [],
  templateUrl: './business-data-form.component.html',
  styleUrl: './business-data-form.component.css'
})
export class BusinessDataFormComponent {
  autoResize(event: any) {
    const textarea = event.target;
    
    // Guardamos posición del cursor/selección
    const { selectionStart, selectionEnd, scrollTop } = textarea;
    
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    
    // Restauramos posición
    textarea.scrollTop = scrollTop;
    
    // Si había texto seleccionado, lo restauramos
    if (selectionStart !== selectionEnd) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }
}
