import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
ThemeService
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  // Theme Light And Dark
  constructor(public themeService: ThemeService){ }
  ngOnInit(): void {
   // Retrieve theme state from localStorage
   this.isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
   // Update icon based on theme state
   this.updateIcon();
  }

  isDarkTheme : boolean = true;//Moon icon initially displayed
  toggleTheme(): void {
    this.updateIcon();
  
  // Toggle theme
  this.isDarkTheme = !this.isDarkTheme;

  // Save theme state to localStorage
  localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());

  // Toggle theme using ThemeService
  this.themeService.toggleTheme();
  }
  updateIcon(): void {
    // Update icon based on theme state
    const moonIcon = document.querySelector('.moonDark');
    const sunIcon = document.querySelector('.sunLight');
    if (this.isDarkTheme) {
      moonIcon?.classList.add('active');
      sunIcon?.classList.remove('active');
    } else {
      moonIcon?.classList.remove('active');
      sunIcon?.classList.add('active');
    }
  }
}
