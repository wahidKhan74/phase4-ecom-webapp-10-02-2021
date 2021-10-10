import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit:number=50) {
    if(!value) 
      return null;
    // let actualLimit =(limit) ? limit :50;
    return value.substr(0,limit) + "...";
  }

}
