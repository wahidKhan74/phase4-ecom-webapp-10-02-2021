import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: number, digit:string='2'): number {
    return value*parseFloat(digit);
  }

}
