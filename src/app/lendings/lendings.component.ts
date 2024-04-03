import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-lendings',
  templateUrl: './lendings.component.html',
  styleUrl: './lendings.component.css'
})
export class LendingsComponent {
  constructor(public themeService:ThemeService){

  }
}
