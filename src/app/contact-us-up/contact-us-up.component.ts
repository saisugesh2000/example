import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../theme.service';

declare var AOS:any;

@Component({
  selector: 'app-contact-us-up',
  templateUrl: './contact-us-up.component.html',
  styleUrl: './contact-us-up.component.css'
})
export class ContactUsUPComponent implements OnInit {
    
  constructor(private renderer: Renderer2,public themeService:ThemeService) { }


  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Check if user has scrolled to a certain position
    if (window.scrollY > 100) { // Adjust 500 to the scroll position where you want to trigger animations
      // Reinitialize AOS to trigger animations
      this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
      AOS.refreshHard();
    }
  }
}
