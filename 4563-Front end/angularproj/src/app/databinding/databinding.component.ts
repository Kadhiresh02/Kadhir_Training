import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName:string="Kadhir";
  imPath:string="./images/elephant.jpg";
  imgName:string="Elephant";
  inputData:string="lion";
  
  greeting(val:string){
    window.alert(`Good morning ${val}`);
  }
}
