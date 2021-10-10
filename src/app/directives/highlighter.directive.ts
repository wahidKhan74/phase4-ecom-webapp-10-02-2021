import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elemen: ElementRef) {
    elemen.nativeElement.style.backgroundColor ='lightgreen';
    elemen.nativeElement.style.border ='2px solid green';
   }

}
