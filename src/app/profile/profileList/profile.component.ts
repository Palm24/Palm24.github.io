import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

    imgProfile = "https://sv1.picz.in.th/images/2021/05/21/Px8BZI.jpg";
    currentDae: String = formatDate(new Date(),'dd/MM/yyyy', 'en');

    pgm: string = "Programming Language";
    fw: string = "Framework";
    tl: string = "Tools";

    item_pgm = {
        html: "Html",
        css: "CSS",
        javascript: "JavaScript",
        nodejs: "NodeJS",
        c_sharp: ".NetCore",
        php: "PHP"
    }

    item_fw = {
        angular: "Angular",
        angular_mtr: "Angular Material",
        bootstrap: "Bootstrap 4",
        wordpress: "Wordpress"
    }

    item_tl = {
        vs_code: "Visual Code",
        vs_studio: "Visual Studio",
        database: "Microsoft SQL Server Management 18",
        git: "Source Tree"
    }

    constructor() {}
    
    ngOnInit(): void {}

    onCheckTypeLanguagePgm(item: any, type: string) {
        if (type == this.pgm) {
            if (item == this.item_pgm.html) {
                return 'pgm-html';
            } else if (item == "CSS") {
                return 'pgm-css';
            } else if (item == "JavaScript") {
                return 'pgm-javaScript';
            } else if (item == "NodeJS") {
                return 'pgm-nodeJS';
            } else if (item == ".NetCore") {
                return 'pgm-c_Sharp';
            } else if (item == "PHP") {
                return 'pgm-php';
            }
        } else if (type == this.fw) {
            if (item == this.item_fw.angular) {
                return 'fw-angular';
            } else if (item == this.item_fw.angular_mtr) {
                return 'fw-angular_material';
            } else if (item == this.item_fw.bootstrap) {
                return 'fw-bootstrap';
            } else if (item == this.item_fw.wordpress) {
                return 'fw-wordpress';
            }
        } else if (type == this.tl) {
            if (item == this.item_tl.vs_code) {
                return 'tl-vs_code';
            } else if (item == this.item_tl.vs_studio) {
                return 'tl-vs_studio';
            } else if (item == this.item_tl.database) {
                return 'tl-database';
            } else if (item == this.item_tl.git) {
                return 'tl-git';
            }
        }
    }
}