import { Component } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';
  selectLink: string = 'home';
  selectedProduct: Product;

  constructor(private productListService: ProductListService){

  }

  ngOnInit(){
    this.productListService.productSelectedEvent.subscribe(
      (product:Product)=>{
        this.selectedProduct = product;
      }
    )
  }

  onAppHeaderClick(sLink: string){
      this.selectLink = sLink;
  }

  onClick(){
    this.title='Flipkar';
  }
}
