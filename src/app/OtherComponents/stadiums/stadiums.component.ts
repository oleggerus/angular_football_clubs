import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  slideIndex: number = 1;

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }
  
  plusSlides(n:number) {
   this.showSlides(this.slideIndex += n);
  }

   currentSlide(n:number) {
   this.showSlides(this.slideIndex = n);
  }

  showSlides(n:number) {
    let i: number;
    var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) {
      this.slideIndex = slides.length;
      n = 3;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    if (n > 3) {
      n = 1;
      setTimeout(() => { this.showSlides(n + 1);alert("boom"); }, 2000);

    }

  }
 
}