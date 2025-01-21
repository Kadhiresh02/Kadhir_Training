import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-image-toggle',
  imports: [],
  templateUrl: './multi-image-toggle.component.html',
  styleUrl: './multi-image-toggle.component.css'
})
export class MultiImageToggleComponent {
  imgPath: string = "./images/zebra.jpg";
  imgName: string = "Zebra";
  zebra() {
    this.imgPath = "./images/zebra.jpg";
    // this.imgName = "Zebra";
  }
  lion(){
    this.imgPath = "./images/lion.jpg";
    // this.imgName = "Lion";
  }
  tiger(){
    this.imgPath = "./images/tiger.jpg";
    // this.imgName = "Tiger";
  }
  elephant(){
    this.imgPath = "./images/elephant.jpg";
    // this.imgName = "Elephant";
  }
}
