import { Component, EventEmitter, Output } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Product } from '../product.model';//model

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',//view
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {//controller

  products: Product[];//declaration

  //@Output() productSelectedParent = new EventEmitter<Product>;

   constructor(private productListService: ProductListService){
////////////////////
   }

   ngOnInit(){
    this.products = this.productListService.getProducts(); //assignment
   }

 
}
