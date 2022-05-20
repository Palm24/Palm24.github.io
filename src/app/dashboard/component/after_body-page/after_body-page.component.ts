import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-after_body-page',
    templateUrl: './after_body-page.component.html',
    styleUrls: ['./after_body-page.component.css']
})
export class AfterBodyPageComponent implements OnInit{
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