import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ToggleImageComponent } from './toggle-image/toggle-image.component';
import { MultiImageToggleComponent } from './multi-image-toggle/multi-image-toggle.component';
import { ParentComponent } from './parent/parent.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { VehiclelistComponent } from './task/vehiclelist/vehiclelist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ToggleImageComponent,MultiImageToggleComponent,ParentComponent,MypipesComponent,VehiclelistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproj';
}
