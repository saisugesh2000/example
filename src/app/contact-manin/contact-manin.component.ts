import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-contact-manin',
  templateUrl: './contact-manin.component.html',
  styleUrl: './contact-manin.component.css'
})
export class ContactManinComponent {

  constructor(public themeService:ThemeService){

  }
}
