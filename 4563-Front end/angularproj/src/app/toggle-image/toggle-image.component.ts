import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-image',
  imports: [],
  templateUrl: './toggle-image.component.html',
  styleUrl: './toggle-image.component.css'
})
export class ToggleImageComponent {
  imgPath: string = "./images/horse.jpg";
  imgName: string = "Horse";

  toggle() {
    if (this.imgName === "Horse") {
      this.imgPath = "./images/lion.jpg";
      this.imgName = "Lion";
    }
    else {
      this.imgPath = "./images/horse.jpg";
      this.imgName = "Horse";
    }
  }
}
