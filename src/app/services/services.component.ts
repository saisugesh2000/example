import { Component  } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(public themeService:ThemeService){

  }
}