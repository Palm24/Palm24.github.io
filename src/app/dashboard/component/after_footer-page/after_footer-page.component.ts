import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-after_footer-page',
    templateUrl: './after_footer-page.component.html',
    styleUrls: ['./after_footer-page.component.css']
})
export class AfterFooterPageComponent implements OnInit{

    img = {
        circle1: "./assets/images/11.jpg",
        circle2: "./assets/images/7.jpg",
        circle3: "./assets/images/12.jpg"
    }
    
    constructor() {}
    
    ngOnInit(): void {}
}