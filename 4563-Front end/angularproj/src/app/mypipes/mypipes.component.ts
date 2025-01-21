import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CubePipe } from '../shared/customPipe/cube.pipe';
import { SquarePipe } from '../shared/customPipe/square.pipe';

@Component({
  selector: 'app-mypipes',
  imports: [CommonModule , CubePipe ,SquarePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
msg:string="You are all in ChangePond, we are learning Angular";
emp={id:11,name:"AJAY",sal:50000,address:"Chennai"}
dateObj=new Date();

}
