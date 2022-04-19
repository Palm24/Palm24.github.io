import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-body-page',
    templateUrl: './body-page.component.html',
    styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit{
    backgroundUrl="https://www.img.in.th/images/123abe8234625411593575a22dd68fd0.jpg"

    constructor() {}
    
    ngOnInit(): void {}
}