import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
    <div *ngIf="childSelectedBeer">
      <h3>{{childSelectedBeer.name}}</h3>
      <h4>{{childSelectedBeer.brand}}</h4>
      <hr>
      <div class="form-group">
        <label>Enter New Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedBeer.name">
      </div>
      <div class="form-group">
        <label>Enter New Brand:</label>
        <input class="form-control" [(ngModel)]="childSelectedBeer.brand">
      </div>
      <div class="form-group">
        <label>Enter New Type:</label>
        <input class="form-control" [(ngModel)]="childSelectedBeer.type">
      </div>
      <div class="form-group">
        <label>Enter New Price:</label>
        <input class="form-control" [(ngModel)]="childSelectedBeer.price">
      </div>
      <div class="form-group">
        <label>Enter New Alcohol Content:</label>
        <input class="form-control" [(ngModel)]="childSelectedBeer.alcoholContent">
      </div>
      <div class="form-group">
        <label>Enter New Quantity:</label>
        <input class="form-control" [(ngModel)]="childSelectedBeer.pints">
      </div>
      <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
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
