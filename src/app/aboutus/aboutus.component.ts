import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../theme.service';

declare var AOS:any;
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent  implements OnInit {
    
  constructor(private renderer: Renderer2, public themeService:ThemeService) { }
 
  

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
    if (window.scrollY > 500) { 
      // Reinitialize AOS to trigger animations
      this.renderer.setStyle(document.body, 'overflow-x', 'hidden');
      AOS.refreshHard();
    }
  }
}
