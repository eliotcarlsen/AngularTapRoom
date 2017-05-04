import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: "sold-beer",
  template:`
  <select (change)="onChange($event.target.value, currentBeer)">
    <option value="pint">Sell Pint</option>
    <option value="growler">Sell Growler</option>
    <option value="large growler">Sell Large Growler</option>
  </select>
  `
})

export class SoldBeerComponent {
  @Input() currentBeer: Beer;
  @Output() clickedToSell = new EventEmitter();

  onChange(soldBeer, currentBeer){
    if (currentBeer.pints - 2 >= 0) {
      if (soldBeer === "pint") {
        currentBeer.pints = currentBeer.pints - 1
      } else if (soldBeer === "growler"){
        currentBeer.pints = currentBeer.pints - 2
      } else if (soldBeer === "large growler"){
        currentBeer.pints = currentBeer.pints - 4
      }
      this.clickedToSell.emit(currentBeer.pints);
    }

  }
}
