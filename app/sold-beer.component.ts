import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: "sold-beer",
  template:`
  <form>
  <select #option>
    <option value="Choose One">Choose One</option>
    <option value="pint">Sell Pint</option>
    <option value="growler">Sell Growler</option>
    <option value="large growler">Sell Large Growler</option>
  </select>
  <label>Enter the quantity:</label>
  <input #quantity>
  <button (click)="submit(option.value, quantity.value, currentBeer)">Sell</button>
  </form>
  `
})

export class SoldBeerComponent {
  @Input() currentBeer: Beer;
  @Output() clickedToSell = new EventEmitter();

  submit(soldBeer, quantity, currentBeer){
    if (currentBeer.pints - 2 >= 0) {
      if (soldBeer === "pint") {
        currentBeer.pints = (currentBeer.pints - (quantity * 1))
      } else if (soldBeer === "growler"){
        currentBeer.pints = (currentBeer.pints - (quantity * 2))
      } else if (soldBeer === "large growler"){
        currentBeer.pints = (currentBeer.pints - (quantity * 4))
      }
      this.clickedToSell.emit(currentBeer.pints);
    }

  }
}
