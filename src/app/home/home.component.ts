import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = 'Ashish';
  surname: string = 'Srivastava'
  roleResponsibity: any = "Frontend Developer | Web Developer | Game Developer | GIT" 

  constructor() { }

  ngOnInit(): void {
  }

}
