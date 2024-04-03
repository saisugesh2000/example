import { Component,HostListener } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css'
})
export class BackToTopComponent {

  constructor(public themeService:ThemeService){}
  // Set the scroll position to show the button
  scrollPositionToShowButton = 100; 
  isButtonvisibleBACKTOTOP = false;
  

  // Function to handle scrolling
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > this.scrollPositionToShowButton) {
      this.isButtonvisibleBACKTOTOP = true;
    } else {
      this.isButtonvisibleBACKTOTOP = false;
    }
  } 
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
