import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit{
  userFullName: string = 'Natthasit Suksumran'

  constructor() {}
  
  ngOnInit(): void {}
}
