import { Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  status:boolean = false;
  showMenu:boolean = false;

  constructor(private el:ElementRef) {}

  ngOnInit(): void {

  }

  menuT():void{
    this.status = !this.status;
  }


  // menuT(): void {

  //   let menuBtn = this.el.nativeElement.querySelector('.menu-btn');
  //   let menu = this.el.nativeElement.querySelector('.menu');
  //   let menuNav = this.el.nativeElement.querySelector('.menu-nav');
  //   let menuBranding = this.el.nativeElement.querySelector('.menu-branding');

  //   let navItems = this.el.nativeElement.querySelectorAll('.nav-item');

  //   let showMenu:boolean = false;

  //   if (!showMenu) {
  //     menuBtn.classList.add('close');
  //     menu.classList.add('show');
  //     menuNav.classList.add('show');
  //     menuBranding.classList.add('show');
  //     navItems.forEach((item) => item.classList.add('show'));

      
  //   } else {
  //     document.getElementsByTagName("div")[0].classList.remove("close");
  //     // menuBtn.classList.remove('close');
  //     menu.classList.remove('show');
  //     menuNav.classList.remove('show');
  //     menuBranding.classList.remove('show');
  //     navItems.forEach((item) => item.classList.remove('show'));

  //   }
  // }
}
