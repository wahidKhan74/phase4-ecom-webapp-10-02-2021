import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputformator]'
})
export class InputformatorDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('blur')
  onBlur() {
    console.log("Event Trigger !");
    let value:string = this.elem.nativeElement.value;
    this.elem.nativeElement.value = value.toLowerCase();
    
  }

}
