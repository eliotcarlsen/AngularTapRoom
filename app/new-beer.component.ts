import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component ({
  selector: 'new-beer',
  template:`
    <h1>New Beer</h1>
    <div class="form-group">
      <label>Enter New Beer Name:</label>
      <input class="form-control" #newName>
    </div>
    <div class="form-group">
      <label>Enter Brand:</label>
      <input class="form-control" #newBrand>
    </div>
    <div class="form-group">
      <label>Enter Type:</label>
      <input class="form-control" #newType>
    </div>
    <div class="form-group">
      <label>Enter Price:</label>
      <input class="form-control" #newPrice #setprice>
    </div>
    <div class="form-group">
      <label>Enter Alcohol Content:</label>
      <input class="form-control" #newAlcoholContent>
    </div>
      <button class="btn btn-success" (click)="submitNewBeer(newName.value, newBrand.value, newType.value, newPrice.value, setprice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newType.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
  `
})
export class NewBeerComponent {
  @Input() childBeerList: Beer[];
  @Output() newBeerSender = new EventEmitter();

  submitNewBeer(name: string, brand: string, type: string, price: number, setprice: number, alcoholContent: string) {
    var newBeerToAdd: Beer = new Beer(name, brand, type, price, setprice, alcoholContent);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
