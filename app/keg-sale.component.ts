import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: "keg-sale",
  template: `
  <label>Regular Price:</label>
  <input type="radio" name="sale" value="regular" (change)="regularBeerPrice(currentBeer)">
  <label>On Sale Price:</label>
  <input type="radio" name="sale" value="sale" (change)="onBeerSale(currentBeer)">
  `
})
export class KegSaleComponent {
  @Input() currentBeer: Beer;
  @Input() ogKegList: Beer[];
  @Output() onSale = new EventEmitter();
  @Output() regularPrice = new EventEmitter();

  regularBeerPrice(currentBeer){
    this.currentBeer.price = currentBeer.setprice;
    this.regularPrice.emit(this.currentBeer.price);
  }
  onBeerSale(currentBeer){
      currentBeer.price = currentBeer.price * .75;
      this.onSale.emit(this.currentBeer.price);
    }
}
