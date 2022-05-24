import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-body-page',
    templateUrl: './body-page.component.html',
    styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit{
    img = {
        Graduate: "./assets/images/2.jpg",
        Intern: "./assets/images/5.jpg",
        Work1: "./assets/images/6.jpg",
        Work2: "./assets/images/9.jpg"
    }
    
    defaultYear: Number = new Date().getFullYear();
    currentDate: String = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    
    constructor() {}
    
    ngOnInit(): void {}
}