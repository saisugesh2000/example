import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-about-overview',
  templateUrl: './about-overview.component.html',
  styleUrl: './about-overview.component.css'
})
export class AboutOverviewComponent {

  constructor(public themeService:ThemeService ){}
}
