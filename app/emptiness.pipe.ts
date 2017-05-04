import {Pipe, PipeTransform} from '@angular/core';
import {Beer} from './beer.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Beer[], desiredFilter){
    var output: Beer[] = [];
    if(desiredFilter === "lowKegs"){
      for (var i = 0; i < input.length; i++){
        if(input[i].pints < 30) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
  }
  }
}
