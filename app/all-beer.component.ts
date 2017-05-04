import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: "all-beer",
  template: `
  <div class = "row">
    <div class = "col-md-12">
      <div class="form-group">
        <label for="beerLevel">Show Beers Running Low</label>
        <select class="form-control" id="beerLevel" (change)="onChange($event.target.value)">
          <option value="allBeers">All Beers</option>
          <option value="lowKegs">Low Kegs</option>
        </select>
      </div>
      <label>Filter Beers by Type</label>
      <input class="form-control" type="text" [(ngModel)]="term" />
    </div>
  </div>
    <div class="col-md-4" *ngFor="let currentBeer of childBeerList | emptiness:filterByEmptiness | filter:term">
      <h3>{{currentBeer.name}}</h3>
      <h4>{{currentBeer.brand}}</h4>
      <p><strong>Style:</strong> {{currentBeer.type}}</p>
      <p [class]="priorityColor(currentBeer)"><strong>Price: </strong>$ {{currentBeer.price}}</p>
      <p>{{currentBeer.alcoholContent}}</p>
      <p><strong>Pints remaining:</strong> {{currentBeer.pints}}</p>
      <button class="btn btn-primary btn-xs" (click)="editButtonHasBeenClicked(currentBeer)">Edit</button>
      <br>
      <br>
      <sold-beer [currentBeer]="currentBeer" (change)="soldBeer($event)"></sold-beer>
      <keg-sale [ogKegList]="childBeerList" [currentBeer]="currentBeer" (change)="saleBeer($event)" (change)="regularBeer($event)"></keg-sale>
    </div>
  `
})

export class AllBeerComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(beerToEdit: Beer){
    this.clickSender.emit(beerToEdit);
  }
  regularBeer(regularPriceOnBeer){

  }
  saleBeer(beerOnSale){

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
  priorityColor(currentBeer){
  if (10 <= currentBeer.price){
    return "bg-danger";
  } else if (6 <= currentBeer.price) {
    return  "bg-warning";
  } else {
    return "bg-info";
  }
}
}
