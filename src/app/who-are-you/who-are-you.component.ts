import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrl: './who-are-you.component.css'
})
export class WhoAreYouComponent {
  constructor(public themeService:ThemeService){
  
  }
}
