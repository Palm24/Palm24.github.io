import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

    currentDae: String = formatDate(new Date(),'dd/MM/yyyy', 'en');
    
    constructor() {}
    
    ngOnInit(): void {}
}