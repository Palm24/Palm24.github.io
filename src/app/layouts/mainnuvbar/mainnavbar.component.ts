import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layoutNavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainNavbarComponent implements OnInit{
  userFullName: string = 'Natthasit Suksumran'

  constructor() {}
  
  ngOnInit(): void {}
}
