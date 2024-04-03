import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-scrollable-section',
  templateUrl: './scrollable-section.component.html',
  styleUrls: ['./scrollable-section.component.css']
})
export class ScrollableSectionComponent implements OnInit {
  currentPage = 1;
  pageCount = 6;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Reset scroll position when navigation ends
      window.scrollTo(0, 0); // You can adjust this as per your requirement
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch(event.key) {
      case 'ArrowUp':
        event.preventDefault(); // Prevent default scrolling behavior
        this.navigateUp();
        break;
      case 'ArrowDown':
        event.preventDefault(); // Prevent default scrolling behavior
        this.navigateDown();
        break;
    }
  }

  navigateUp() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateActiveSection();
    }
  }

  navigateDown() {
    if (this.currentPage < this.pageCount) {
      this.currentPage++;
      this.updateActiveSection();
    }
  }

  onWheel(event: WheelEvent, page: number): void {
    event.preventDefault();

    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      this.navigateDown();
    } else if (delta < 0) {
      this.navigateUp();
    }
  }

  updateActiveSection() {
    this.scrollIntoView();

    // Update active class for navigation
    const tags = document.querySelectorAll('.active');
    tags.forEach(tag => tag.classList.remove('active'));
    const activeTag = document.getElementById(`tag${this.currentPage}`);
    if (activeTag) {
      activeTag.classList.add('active');
    }
  }

  scrollIntoView() {
    const element = document.getElementById(`sec${this.currentPage}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
