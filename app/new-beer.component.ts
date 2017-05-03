import { Component, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component ({
  selector: 'new-beer',
  template:`
    <h1>New Beer</h1>
    <div>
      <label>Enter New Beer Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Type:</label>
      <input #newType>
    </div>
    <div>
      <label>Enter Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input #newAlcoholContent>
    </div>
    <button (click)="submitNewBeer(newName.value, newBrand.value, newType.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newType.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
  `
})
export class NewBeerComponent {
  @Output() newBeerSender = new EventEmitter();

  submitNewBeer(name: string, brand: string, type: string, price: number, alcoholContent: string) {
    var newBeerToAdd: Beer = new Beer(name, brand, type, price, alcoholContent);
    this.newBeerSender.emit(newBeerToAdd);
  }
}
