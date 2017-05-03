import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
    <div *ngIf="childSelectedBeer">
      <h3>{{childSelectedBeer.name}}</h3>
      <h4>{{childSelectedBeer.brand}}</h4>
      <hr>
      <label>Enter New Name:</label>
      <input [(ngModel)]="childSelectedBeer.name">
      <label>Enter New Brand:</label>
      <input [(ngModel)]="childSelectedBeer.brand">
      <label>Enter New Type:</label>
      <input [(ngModel)]="childSelectedBeer.type">
      <label>Enter New Price:</label>
      <input [(ngModel)]="childSelectedBeer.price">
      <label>Enter New Alcohol Content:</label>
      <input [(ngModel)]="childSelectedBeer.alcoholContent">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
