import { Component } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
    orders: Order[] = [
      new Order('ORD123', 'Y 81'),
      new Order('ORD124', 'Apple 14'),
      new Order('ORD1256', 'Y 81'),
      new Order('ORD127', 'Apple 14'),
      new Order('ORD128', 'Y 81'),
      new Order('ORD129', 'Apple 14'),
      new Order('ORD1231', 'Y 81'),
      new Order('ORD1233', 'Apple 14')
    ]
}
