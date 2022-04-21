import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  timeOut: boolean = true;

  constructor() {}
    
  ngOnInit(): void {
    this.timeOut = true;
    setTimeout(() => {
      this.timeOut = false;
    },1500);
  }
}
