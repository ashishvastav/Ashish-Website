import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements OnInit {

    menuBtn = this.elementRef.nativeElement.querySelector('.menu-btn');
     menu = this.elementRef.nativeElement.querySelector('.menu');
     menuNav = this.elementRef.nativeElement.querySelector('.menu-nav');
     menuBranding = this.elementRef.nativeElement.querySelector('.menu-branding');

     navItems = this.elementRef.nativeElement.querySelectorAll('.nav-item');

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  
  @HostBinding('class.close') classes:boolean = false;
  // @HostBinding('class') className = 'menu-btn menu menu-nav menu-branding nav-item';


  @HostListener('click',['classes']) Click(){
    console.log('clicked');

  this.classes = !this.classes;
    if(!this.classes ){
      this.menu.classList.add('show');
}else{
  console.log('ashish')
}
  }

  ngOnInit(){
  }

  
}
