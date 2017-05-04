import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: "filter-beer",
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allBeers">All Beers</option>
      <option value="lowKegs">Low Kegs</option>
    </select>
    <label>Filter Beers by Type</label>
    <input class="form-control" type="text" [(ngModel)]="term" />
    <div class="col-md-4" *ngFor="let currentBeer of childBeerList | emptiness:filterByEmptiness | filter:term" (change)="onTerm($event.target.value)">
    </div>

  `
})

export class FilterBeerComponent {
  @Input() childBeerList: Beer[];
  @Output() filterSender = new EventEmitter();

  onTerm(results){
    console.log("I'm here in filterBeersHasBeenTyped.")
    this.filterSender.emit(results);
  }

  soldBeer(clickedToSell){
  }
  filterByEmptiness: string = "emptyKegs";
  onChange(optionChosen){
    this.filterByEmptiness = optionChosen;
  }
  filterByType: string = "allOthers";
  onChange1(optionChosen){
    this.filterByType = optionChosen;
  }
}
