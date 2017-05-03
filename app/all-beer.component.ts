import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: "all-beer",
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allBeers">All Beers</option>
      <option value="lowKegs">Low Kegs</option>
    </select>
    <select (change)="onChange1($event.target.value)">
      <option value="IPA">IPA</option>
      <option value="allOthers">All other Beers</option>
    </select>
    <div class="col-md-4" *ngFor="let currentBeer of childBeerList | emptiness:filterByEmptiness | type:filterByType">
      <h3>{{currentBeer.name}}</h3>
      <h4>{{currentBeer.brand}}</h4>
      <p><strong>Style:</strong> {{currentBeer.type}}</p>
      <p><strong>Price: </strong>$ {{currentBeer.price}}</p>
      <p>{{currentBeer.alcoholContent}}</p>
      <p><strong>Pints remaining:</strong> {{currentBeer.pints}}</p>
      <button class="btn btn-primary btn-xs" (click)="editButtonHasBeenClicked(currentBeer)">Edit</button>
      <br>
      <br>
      <sold-beer [currentBeer]="currentBeer" (click)="soldBeer($event)"></sold-beer>
    </div>
  `
})

export class AllBeerComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(beerToEdit: Beer){
    this.clickSender.emit(beerToEdit);
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
