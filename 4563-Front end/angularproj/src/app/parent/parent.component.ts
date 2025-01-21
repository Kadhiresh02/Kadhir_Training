import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone:true,
  imports: [ChildComponent,RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
parentData:any;
childData:any;
sendData(val:string)
{
  // console.log(val);
  this.parentData=val;
}
}
