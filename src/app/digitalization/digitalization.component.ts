import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-digitalization',
  templateUrl: './digitalization.component.html',
  styleUrl: './digitalization.component.css'
})
export class DigitalizationComponent {
  constructor(public themeService:ThemeService){

  }
}
