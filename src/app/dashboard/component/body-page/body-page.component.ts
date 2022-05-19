import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-body-page',
    templateUrl: './body-page.component.html',
    styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit{
    backgroundUrl="https://www.img.in.th/images/123abe8234625411593575a22dd68fd0.jpg"
    
    defaultYear: Number = new Date().getFullYear();
    currentDate: String = formatDate(new Date(), 'dd/MM/yyyy', 'en');

    tools = {
        html: "Html5",
        css: "CSS",
        javascript: "JavaScript",
        php: "PHP",
        nodejs: "NodeJS",
        c_sharp: "C# / .NetCore",
        js_frameWork: "Angular",
        angular_material: "Angular Matrerial",
        bootstrap: "Bootstrap 4",
        web_framework: "Wordpress",
        vs: "Visual Code",
        vs_studio: "Visual Studio Code",
        database: "Microsoft SQL SERVER Management Studio 18",
        git: "Source Tree"
    }
    
    constructor() {}
    
    ngOnInit(): void {}
}