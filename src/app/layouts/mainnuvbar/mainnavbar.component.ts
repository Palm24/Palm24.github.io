import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layoutNavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainNavbarComponent implements OnInit{
  userFullName: string = 'Natthasit Suksumran'
  timeOut: boolean = true;

  constructor() {}
  
  ngOnInit(): void {
    this.timeOut = true;
    setTimeout(() => {
      this.timeOut = false;
    },1500);
  }
}
