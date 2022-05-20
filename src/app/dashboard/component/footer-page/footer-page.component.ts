import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-footer-page',
    templateUrl: './footer-page.component.html',
    styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit{
    
    defaultYear: Number = new Date().getFullYear();
    currentDate: String = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    
    constructor() {}
    
    ngOnInit(): void {}
}