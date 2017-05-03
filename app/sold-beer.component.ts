import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: "sold-beer",
  template:`
    <button class="btn btn-danger btn-xs" (click)="sellButtonClicked(currentBeer)">Sell Beer</button>
  `
})

export class SoldBeerComponent {
  @Input() currentBeer: Beer;
  @Output() clickedToSell = new EventEmitter();

  sellButtonClicked(soldBeer: Beer){
    if (soldBeer) {
      soldBeer.pints = soldBeer.pints - 1
    }
    this.clickedToSell.emit(soldBeer.pints);
  }
}
