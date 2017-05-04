import {Pipe, PipeTransform} from '@angular/core';
import {Beer} from './beer.model';

@Pipe({
  name: "kegsale",
  pure: false
})

export class KegSalePipe implements PipeTransform {
  transform(){
  }

}
