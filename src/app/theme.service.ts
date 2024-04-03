import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  //  Light Mode And Dark Mode
  isDarkMode: boolean = false;

  constructor() {
    // Read theme preference from localStorage if available
    if (typeof sessionStorage !== 'undefined'){
      const storedTheme = sessionStorage.getItem('isDarkMode');
      this.isDarkMode = storedTheme ? JSON.parse(storedTheme) : false;
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    // Save theme preference to localStorage if available
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
    }
  }

 

}
