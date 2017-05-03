import { Component } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'app-root',
  template:`
  <div class="container">
    <h1>R and E's Tap Room</h1>
    <div class="row">
      <div class="col-md-9">
        <all-beer [childBeerList]="masterBeerList" (clickedToSell)="soldBeer($event)" (clickSender)="editBeer($event)"></all-beer>
      </div>
    <div>
      <edit-beer [childSelectedBeer]="selectedBeer" (doneButtonClickedSender)="finishedEditing()"></edit-beer>
    </div>
    <div>
    <div class="col-md-3">
      <new-beer (newBeerSender)="addBeer($event)"></new-beer>
    </div>
  </div>
  `
})

export class AppComponent {
  masterBeerList: Beer[] = [
    new Beer("Eliot's IPA", "Eliot Brewing", "IPA", 6, "6.8%"),
    new Beer("Rob's Rye Ale", "Rob's Brewing", "Pale Ale", 12, "9.8%"),
    new Beer("Max's Strawberry Ale", "Max's Brewing", "Shandy", 5, "3%"),
    new Beer("Xing's Stout", "Xing's Brewing", "Stout", 7, "7%")
  ];

  selectedBeer = null;

  addBeer(newBeerFromChild: Beer){
    this.masterBeerList.push(newBeerFromChild);
  }

  editBeer(clickedBeer){
    this.selectedBeer = clickedBeer;
  }

  finishedEditing(){
    this.selectedBeer = null;
  }


}
