import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RtfComponent } from '../rtf/rtf.component';
import { UtdfComponent } from '../utdf/utdf.component';

@Component({
  selector: 'app-angform',
  imports: [RouterOutlet,RtfComponent,UtdfComponent,RouterLink],
  templateUrl: './angform.component.html',
  styleUrl: './angform.component.css'
})
export class AngformComponent {

}
