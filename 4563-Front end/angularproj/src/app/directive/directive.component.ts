import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directive',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  iscond1:boolean=true;
  iscond2:boolean=false;
  iscond3:boolean=!true;
  courses:string[]=["React","Angular","Java","Python","C++"];
  myCourse:string="Angular";


  myStyle={
    color:this.iscond1?"red":"green",
    backgroundColor:this.iscond2?"aqua":"yellow",
    fontSize:this.iscond3?"25px":"35px"
  }
  myClass={
    txtPrimary:this.iscond1,
    txtDanger:this.iscond2,
    special:!this.iscond3
  }
}
