import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowToggle]'
})
export class ShowToggleDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  
  @HostBinding('class.show') className:boolean = false;

  @HostListener('click',['className']) myClick(){
    console.log('show class');
    this.className = !this.className;
  
  }

  ngOnInit(){
  }

  
}
