import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
declare var AOS:any;
@Component({
  selector: 'app-welcome-ridhi',
  templateUrl: './welcome-ridhi.component.html',
  styleUrl: './welcome-ridhi.component.css'
})
export class WelcomeRIDHIComponent implements OnInit {
    
  constructor(private renderer: Renderer2) { }

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
