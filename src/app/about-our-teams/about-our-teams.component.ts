import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-about-our-teams',
  templateUrl: './about-our-teams.component.html',
  styleUrl: './about-our-teams.component.css'
})
export class AboutOurTeamsComponent {
  constructor(public themeService:ThemeService ){}
}
