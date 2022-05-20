import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-header-page',
    templateUrl: './header-page.component.html',
    styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit{
    backgroundUrl="https://www.img.in.th/images/123abe8234625411593575a22dd68fd0.jpg"
    currentDate: String = formatDate(new Date(), 'dd/MM/yyyy', 'en');
    
    constructor() {}
    
    ngOnInit(): void {}
}