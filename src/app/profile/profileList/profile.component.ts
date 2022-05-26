import { Component, OnInit } from "@angular/core";
import {formatDate} from '@angular/common';
import { education, experience, personal } from "../entities/profile.entity";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

    imgProfile = "https://sv1.picz.in.th/images/2021/05/21/Px8BZI.jpg";
    currentDae: String = formatDate(new Date(),'dd/MM/yyyy', 'en');
    currentYear: number = new Date().getFullYear();
    age: number = this.currentYear - 1999;
    isChecked = false;

    //#region programming
    item_pgm = {
        type: "Programming Language",
        html: "Html",
        css: "CSS",
        javascript: "JavaScript",
        nodejs: "NodeJS",
        c_sharp: ".NetCore",
        php: "PHP"
    }

    item_fw = {
        type: "Framework",
        angular: "Angular",
        angular_mtr: "Angular Material",
        bootstrap: "Bootstrap 4",
        wordpress: "Wordpress"
    }

    item_tl = {
        type: "Tools",
        vs_code: "Visual Code",
        vs_studio: "Visual Studio",
        database: "Microsoft SQL Server Management 18",
        git: "Source Tree"
    }
    //#endregion

    //#region personal
    personalData: personal[] = [
        {
            section: 'Name',
            detailEng: 'Natthsait Suksumran (Palm)',
            detailThai: 'นายณัฐสิทธิ์ สุขสำราญ (ปาล์ม)'

        },
        {
            section: 'Birth',
            detailEng: 'Feb 24, 1999 ' + '(อายุ' + ' '+this.age+' ' + 'ปี)',
            detailThai: '23 กุมภาพันธ์ 2542' + '(อายุ' + ' '+this.age+' ' + 'ปี)'
        },
        {
            section: 'Email',
            detailEng: 'palmfp2402@gmail.com',
            detailThai: 'palmfp2402@gmail.com'
        },
        {
            section: 'Mobile phone',
            detailEng: '081-169-9195',
            detailThai: '081-169-9195'
        },
        {
            section: 'Address',
            detailEng: '45/1817 Phongsirichai 4 Village Soi Phetkasem 81 MaCharoen Rd. NongKhaem , NongKhangPhlu Bangkok 10160',
            detailThai: '45/1817 หมู่บ้านพงศิริชัย 4 ซอยเพชรเกษม 81 ถนนมาเจริญ เขตหนองแขม แขวงหนองค้างพลู กรุงเทพมหานคร 10160'
        }
    ]
    //#endregion

    //#region education
    educationData: education[] = [
        {
            levelEng: 'High School',
            levelThai: 'มัธยมศึกษา',
            year: '2013 - 2016',
            yearThai: '2556 - 2559',
            nameEng: 'Sarasas Pittaya School',
            nameThai: 'โรงเรียนสารสาสน์พิทยา',
            majorEng: 'Mathematics-Science',
            majorThai: 'วิทย์คณิต'
        },
        {
            levelEng: 'University',
            levelThai: 'มหาวิทยาลัย',
            year: '2017 - 2021',
            yearThai: '2560 - 2564',
            nameEng: 'Rajamangala University Of Technology Krungthep',
            nameThai: 'มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ',
            majorEng: 'Information Technology ( IT )',
            majorThai: 'เทคโนโลยีสารสนเทศ'
        }
    ]
    //#endregion

    //#region experience
    expData: experience[] = [
        {
            level: 'Graduation Project (4th.)',
            levelThai: 'โปรเจบจบการศึกษาชั้นปีที่ 4',
            periodEng: 'March 2021',
            periodThai: 'มีนาคม 2564',
            detailEng: {
                first: 'Basic E-commerce Website.',
                second: '',
                third: '',
                fourth: ''
            },
            detailThai: {
                first: '- เว็บไซต์ E-commerce พื้นฐาน',
                second: '',
                third: '',
                fourth: ''
            }
        },
        {
            level: 'Intern: TAC-M GROUP Co.,Ltd.',
            levelThai: 'ฝึกงาน: บริษัท แท็ค-เอ็ม กรุ๊ป จำกัด ',
            periodEng: 'November 2020 - March 2021',
            periodThai: 'พฤศจิกายน 2563 - มีนาคม 2564',
            detailEng: {
                first: 'Learn and edit about building website e-commerce by WordPress and use Elementor plugin, woo-commerce plugin etc.',
                second: 'Learn and Create Line OA & Chat Bot by line chat bot developer & line bot designer.',
                third: '',
                fourth: ''
            },
            detailThai: {
                first: '- ศึกษาและแก้ไข เกี่ยวกับการสร้างเว็บไซต์ E-commerce โดยใช้ Wordpress และศึกษาการใช้งาน Elementor plugin, woo-commerce plugin และอื่นๆ ในการสร้างและแก้ไขเว็บไซต์',
                second: '- ศึกษาการสร้าง Line OA และ Chat Bot โดยใช้เครื่องมือ line chat bot developer และ line bot designer',
                third: '',
                fourth: ''
            }
        },
        {
            level: 'Working: PTT Digital Solutions Company Limited.',
            levelThai: 'การทำงานปัจจุบัน: บริษัท พีทีที ดิจิตอล โซลูชั่น จำกัด',
            periodEng: 'June 2021 - now',
            periodThai: 'มิถุนายน 2564 - ปัจจุบัน',
            detailEng: {
                first: 'Font-end: Learn more Angular for write & Edit website & use css framework by angular material & bootstrap.',
                second: 'Back-end: Learn C#/.NetCore for write & edit code back-end.',
                third: 'View, edit and check data in database by Microsoft SQL serve management studio 18.',
                fourth: 'Commit push and pll code to gitlab by tool source tree.'
            },
            detailThai: {
                first: '- หน้าบ้าน: ศึกษา feature Angular เพิ่มเติมสำหรับเขียนและแก้ไขเว็บไซต์ และใช้ css framework เป็น angular material และ bootstrap',
                second: '- หลังบ้าน: ศึกษา method และรูปแบบของโค้ดภาษา C#/.NetCore สำหรับการเขียนและแก้ไขโค้ดฝั่งหลังบ้าน',
                third: '- ตรวจสอบ แก้ไข และดูข้อมูลในฐานข้อมูล โดยใช้เครื่องมือ Microsoft SQL serve management studio 18',
                fourth: '- การ Commit push และ pull โค้ดไปยัง gitlab ใช้เครื่องมือ source tree'
            }
        }
    ]
    //#endregion
    
    constructor() {}
    
    ngOnInit(): void {}

    onChangeLanguage(item: boolean) {
        if (item != true) {
            this.isChecked = false;
        } else {
            this.isChecked = true;
        }
    }

    onCheckTypeLanguagePgm(item: any, type: string) {
        if (type == this.item_pgm.type) {
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
        } else if (type == this.item_fw.type) {
            if (item == this.item_fw.angular) {
                return 'fw-angular';
            } else if (item == this.item_fw.angular_mtr) {
                return 'fw-angular_material';
            } else if (item == this.item_fw.bootstrap) {
                return 'fw-bootstrap';
            } else if (item == this.item_fw.wordpress) {
                return 'fw-wordpress';
            }
        } else if (type == this.item_tl.type) {
            if (item == this.item_tl.vs_code) {
                return 'tl-vs_code';
            } else if (item == this.item_tl.vs_studio) {
                return 'tl-vs.studio';
            } else if (item == this.item_tl.database) {
                return 'tl-database';
            } else if (item == this.item_tl.git) {
                return 'tl-git';
            }
        }
    }
}