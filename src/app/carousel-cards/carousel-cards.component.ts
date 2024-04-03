import { Component, AfterViewInit } from '@angular/core';
import { ThemeService } from '../theme.service';

declare var Swiper: any;
@Component({
  selector: 'app-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrl: './carousel-cards.component.css'
})
export class CarouselCardsComponent implements  AfterViewInit {

  constructor(public themeService:ThemeService) { }

  ngAfterViewInit(): void {
    
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
       // auto delay 
       autoplay: {
        delay: 2000,
        disableOnInteraction: false, 
      },
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
          0: {
              slidesPerView: 1,
          },
          520: {
              slidesPerView: 1,
          },
          950: {
              slidesPerView: 1,
          },
      },
    });
    // console.log(swiper);
  }
  

}