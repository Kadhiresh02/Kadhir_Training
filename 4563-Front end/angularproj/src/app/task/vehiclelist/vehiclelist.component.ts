import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vehiclelist',
  imports: [CommonModule],
  templateUrl: './vehiclelist.component.html',
  styleUrl: './vehiclelist.component.css'
})
export class VehiclelistComponent {
  bikes:string[]=["TVS","KTM","Royal Enfield","Bajaj","Hero","Yamaha"];
  cars:string[]=["Tata","Honda","Toyota","Suzuki","Kia","Renault"];
  
  bike(){

  }
  car(){

  }
}
