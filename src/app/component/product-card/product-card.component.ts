import { Component, EventEmitter, Input , OnInit, Output} from '@angular/core';
import { IbookDetails } from 'models/IbookDetails';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input () book! : IbookDetails ;
  @Output () addBook : EventEmitter<any> = new EventEmitter() ;
  @Output () removeBook : EventEmitter<any> = new EventEmitter() ;
  constructor(){
    
  }
  addToCart() :void {
    // alert('Added to cart...')
    this.addBook.emit(this.book);
  }

  removeFromCart() : void {
    this.removeBook.emit(this.book); 
  }

  ngOnInit() : void {
    // console.log(this.book) ;
  }

}