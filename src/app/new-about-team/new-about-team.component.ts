import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-about-team',
  templateUrl: './new-about-team.component.html',
  styleUrl: './new-about-team.component.css'
})
export class NewAboutTeamComponent implements OnInit {
  ngOnInit(): void {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    if (next && prev) { // Check if next and prev elements exist
      next.onclick = function(){
        itemActive = itemActive + 1;
        if(itemActive >= countItem){
            itemActive = 0;
        }
        showSlider();
      }

      prev.onclick = function(){
        itemActive = itemActive - 1;
        if(itemActive < 0){
            itemActive = countItem - 1;
        }
        showSlider();
      }
    }

    function showSlider(){
      let itemActiveOld = document.querySelector('.slider .list .item.active');
      let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

      if (itemActiveOld && thumbnailActiveOld) { // Check if elements exist
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');
      }

      if (items[itemActive] && thumbnails[itemActive]) { // Check if elements exist
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
      }
    }

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
          itemActive = index;
          showSlider();
      })
    });

    // Declare itemActive and countItem here
    let itemActive = 0;
    let countItem = items.length;
  }
}