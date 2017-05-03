import {Pipe, PipeTransform} from '@angular/core';
import {Beer} from './beer.model';

@Pipe({
  name: "type",
  pure: false
})

export class Type implements PipeTransform {
  transform(input: Beer[], desiredType){
    var output: Beer[] = [];
    if(desiredType === "IPA"){
      for (var i = 0; i < input.length; i++){
        if(input[i].type === "IPA") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
  }
  }
}
