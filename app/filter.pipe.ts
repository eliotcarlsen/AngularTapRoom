import {Pipe, PipeTransform} from '@angular/core';
import {Beer} from './beer.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(masterBeerList: any, term: any): any {
    if (term === undefined) return masterBeerList;
    return masterBeerList.filter(function(beer){
      return beer.type.toLowerCase().includes(term.toLowerCase());
})
}
}
