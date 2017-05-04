import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AllBeerComponent } from './all-beer.component';
import { NewBeerComponent } from './new-beer.component';
import { EditBeerComponent } from './edit-beer.component';
import { SoldBeerComponent } from './sold-beer.component';
import { EmptinessPipe } from './emptiness.pipe';
// import { Type } from './type.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterBeerComponent } from './filters.component'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AllBeerComponent, NewBeerComponent, EditBeerComponent, SoldBeerComponent, EmptinessPipe, FilterPipe, FilterBeerComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
