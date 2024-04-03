import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable-about',
  templateUrl: './scrollable-about.component.html',
  styleUrl: './scrollable-about.component.css'
})
export class ScrollableAboutComponent implements OnInit{
  ngOnInit(): void {
   
  }
  currentPage = 1;
  pageCount = 5;

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
