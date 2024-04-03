import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-location-cards',
  templateUrl: './location-cards.component.html',
  styleUrl: './location-cards.component.css'
})
export class LocationCardsComponent {
  constructor(public themeService:ThemeService){

  }
}
