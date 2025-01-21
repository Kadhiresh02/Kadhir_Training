import { Component } from '@angular/core';
import { ItemsserviceService } from '../shared/services/itemsservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
 itemObj =new ItemsserviceService();
}
