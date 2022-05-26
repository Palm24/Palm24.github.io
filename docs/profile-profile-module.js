(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "2OCZ":
/*!********************************************!*\
  !*** ./src/app/profile/profile.routing.ts ***!
  \********************************************/
/*! exports provided: ProfileRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRouting", function() { return ProfileRouting; });
/* harmony import */ var _profileList_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileList/profile.component */ "7QqR");

const ProfileRouting = [
    {
        path: '',
        children: [
            {
                path: 'List',
                component: _profileList_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "7QqR":
/*!**********************************************************!*\
  !*** ./src/app/profile/profileList/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ProfileComponent_div_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.isChecked == false ? item_r3.detailEng : item_r3.detailThai, " ");
} }
function ProfileComponent_div_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.isChecked == false ? item_r4.levelEng : item_r4.levelThai);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.isChecked == false ? item_r4.year : item_r4.yearThai);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.isChecked == false ? item_r4.nameEng : item_r4.nameThai, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.isChecked == false ? item_r4.majorEng : item_r4.majorThai);
} }
function ProfileComponent_div_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.detailEng.first);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.detailEng.second);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.detailEng.third);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.detailEng.fourth);
} }
class ProfileComponent {
    //#endregion
    constructor() {
        this.imgProfile = "https://sv1.picz.in.th/images/2021/05/21/Px8BZI.jpg";
        this.currentDae = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(new Date(), 'dd/MM/yyyy', 'en');
        this.currentYear = new Date().getFullYear();
        this.age = this.currentYear - 1999;
        this.isChecked = false;
        //#region programming
        this.item_pgm = {
            type: "Programming Language",
            html: "Html",
            css: "CSS",
            javascript: "JavaScript",
            nodejs: "NodeJS",
            c_sharp: ".NetCore",
            php: "PHP"
        };
        this.item_fw = {
            type: "Framework",
            angular: "Angular",
            angular_mtr: "Angular Material",
            bootstrap: "Bootstrap 4",
            wordpress: "Wordpress"
        };
        this.item_tl = {
            type: "Tools",
            vs_code: "Visual Code",
            vs_studio: "Visual Studio",
            database: "Microsoft SQL Server Management 18",
            git: "Source Tree"
        };
        //#endregion
        //#region personal
        this.personalData = [
            {
                section: 'Name',
                detailEng: 'Natthsait Suksumran (Palm)',
                detailThai: 'นายณัฐสิทธิ์ สุขสำราญ (ปาล์ม)'
            },
            {
                section: 'Birth',
                detailEng: 'Feb 24, 1999 ' + '(อายุ' + ' ' + this.age + ' ' + 'ปี)',
                detailThai: '23 กุมภาพันธ์ 2542' + '(อายุ' + ' ' + this.age + ' ' + 'ปี)'
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
        ];
        //#endregion
        //#region education
        this.educationData = [
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
        ];
        //#endregion
        //#region experience
        this.expData = [
            {
                detailEng: {
                    first: 'Font-end: Learn more Angular for write & Edit website & use css framework by angular material & bootstrap.',
                    second: 'Back-end: Learn C#/.NetCore for write & edit code back-end.',
                    third: 'View edit and check data in database by Microsoft SQL serve management studio 18.',
                    fourth: 'Commit code to gitlab by tool source tree.'
                },
                detailThai: {
                    first: 'หน้าบ้าน: ',
                    second: 'หลังบ้าน: ',
                    third: '',
                    fourth: ''
                }
            }
        ];
    }
    ngOnInit() { }
    onChangeLanguage(item) {
        if (item != true) {
            this.isChecked = false;
        }
        else {
            this.isChecked = true;
        }
    }
    onCheckTypeLanguagePgm(item, type) {
        if (type == this.item_pgm.type) {
            if (item == this.item_pgm.html) {
                return 'pgm-html';
            }
            else if (item == "CSS") {
                return 'pgm-css';
            }
            else if (item == "JavaScript") {
                return 'pgm-javaScript';
            }
            else if (item == "NodeJS") {
                return 'pgm-nodeJS';
            }
            else if (item == ".NetCore") {
                return 'pgm-c_Sharp';
            }
            else if (item == "PHP") {
                return 'pgm-php';
            }
        }
        else if (type == this.item_fw.type) {
            if (item == this.item_fw.angular) {
                return 'fw-angular';
            }
            else if (item == this.item_fw.angular_mtr) {
                return 'fw-angular_material';
            }
            else if (item == this.item_fw.bootstrap) {
                return 'fw-bootstrap';
            }
            else if (item == this.item_fw.wordpress) {
                return 'fw-wordpress';
            }
        }
        else if (type == this.item_tl.type) {
            if (item == this.item_tl.vs_code) {
                return 'tl-vs_code';
            }
            else if (item == this.item_tl.vs_studio) {
                return 'tl-vs.studio';
            }
            else if (item == this.item_tl.database) {
                return 'tl-database';
            }
            else if (item == this.item_tl.git) {
                return 'tl-git';
            }
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 221, vars: 38, consts: [[1, "container", "mt-2"], [1, "main-body"], [1, "row", "gutters-sm"], [1, "col-md-4", "mb-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-column", "align-items-center", "text-center"], ["alt", "Admin", "width", "80%", 1, "rounded-circle", "card-profile", 3, "src"], [1, "mt-3"], [1, "text-secondary", "mb-1"], [1, "text-muted", "font-size-sm"], [1, "card", "mt-3"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], [1, "mb-0"], [1, "fab", "fa-github", 2, "font-size", "24px"], [1, "text-secondary"], [1, "fab", "fa-chrome", 2, "font-size", "24px"], ["href", "https://palm24.github.io/#/layout/dashboard/index"], [1, "fab", "fa-linkedin", 2, "font-size", "24px"], [1, "card", "h-100"], [1, "card-body", "font"], [1, "d-flex", "align-items-center", "mb-3", "font-weight-bold"], [1, "example-tab-icon", "mr-1"], [1, "row"], [1, "col-sm-6", "col-md-6"], [1, "fab", "fa-html5", 3, "ngClass"], [1, "fab", "fa-css3-alt", 3, "ngClass"], [1, "fab", "fa-js-square", 3, "ngClass"], [1, "fab", "fa-node-js", 3, "ngClass"], [1, "fab", "fa-cuttlefish", 3, "ngClass"], [1, "fab", "fa-php", 3, "ngClass"], [1, "card-body", "font", "pt-0"], [1, "fab", "fa-angular", 3, "ngClass"], [1, "fab", "fa-bootstrap", 3, "ngClass"], [1, "fab", "fa-wordpress", 3, "ngClass"], [1, "fas", "fa-code", 3, "ngClass"], [1, "fas", "fa-database", 3, "ngClass"], ["aria-hidden", "true", 1, "fab", "fa-git-alt", 3, "ngClass"], [1, "col-md-8"], [1, "card", "mb-2"], [1, "col-md-12"], ["color", "primary", "onchange", "onChangeLanguage(isChecked)", 3, "ngModel", "ngModelChange"], [2, "font-size", "18px", "font-family", "cursive"], [1, "mt-2"], [1, "card", "mb-3"], [1, "col-sm-12"], [1, "mb-0", 2, "font-size", "18px", "font-family", "cursive"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["class", "container", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "fa", "fa-graduation-cap"], [1, "col-sm-12", "col-md-12", "mb-1"], ["aria-hidden", "true", 1, "fa", "fa-globe"], [1, "col-sm-4"], [1, "col-sm-8"], ["href", "#", 1, "btn", "btn-outline-info", "btn-sm"], ["aria-hidden", "true", 1, "fa", "fa-hand-o-right"], ["class", "col-sm-8", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-12", "mb-3"], [1, "d-flex", "align-items-center", "mb-3", 2, "font-size", "18px", "font-family", "cursive"], [1, "progress", "mb-3", 2, "height", "5px"], ["role", "progressbar", "aria-valuenow", "69", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "49", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "39", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "80%"], [1, "container"], [1, "col-sm-3"], [1, "mb-0", "font-weight-bold"], [1, "col-sm-9", "text-secondary"], [1, "text-secondary", 2, "font-size", "14px"], [1, "col-sm-9"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Now: PTT Digital Solutions Company Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "PalmPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "My Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u0E13\u0E31\u0E10\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E2A\u0E38\u0E02\u0E2A\u0E33\u0E23\u0E32\u0E0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-slide-toggle", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_mat_slide_toggle_ngModelChange_130_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "g_translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " Personal Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](143, ProfileComponent_div_143_Template, 8, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, ProfileComponent_div_151_Template, 14, 4, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Graduation Project (4th.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "March 2564");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Basic E-commerce Website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Intern: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "TAC-M GROUP Co.,Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "November 2563 - March 2564");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Learn and edit about building website e-commerce by WordPress and use Elementor plugin, woo-commerce plugin etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Learn and Create Line OA & Chat Bot by line chat bot developer & line bot designer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Working: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "PTT Digital Solutions Company Limited.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "June 2564 - now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](203, ProfileComponent_div_203_Template, 12, 4, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Work Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Front-end Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Back-end Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Full stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.imgProfile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentDae);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.item_pgm.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_pgm.html, ctx.item_pgm.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_pgm.html, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_pgm.css, ctx.item_pgm.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_pgm.css, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_pgm.javascript, ctx.item_pgm.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_pgm.javascript, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_pgm.nodejs, ctx.item_pgm.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_pgm.nodejs, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_pgm.c_sharp, ctx.item_pgm.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_pgm.c_sharp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_pgm.php, ctx.item_pgm.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_pgm.php, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.item_fw.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_fw.angular, ctx.item_fw.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.item_fw.angular);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_fw.angular_mtr, ctx.item_fw.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_fw.angular_mtr, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_fw.bootstrap, ctx.item_fw.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_fw.bootstrap, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_fw.wordpress, ctx.item_fw.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_fw.wordpress, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.item_tl.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_tl.vs_code, ctx.item_tl.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_tl.vs_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_tl.vs_studio, ctx.item_tl.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_tl.vs_studio, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_tl.database, ctx.item_tl.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_tl.database, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.onCheckTypeLanguagePgm(ctx.item_tl.git, ctx.item_tl.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item_tl.git, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isChecked == false ? "English" : "Thai", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.personalData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.educationData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.expData);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], styles: [".card-profile[_ngcontent-%COMP%] {\r\n    box-shadow: 0 5px 5px #adb5bd;\r\n}\r\n\r\n.pgm-html[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: orangered;\r\n}\r\n.pgm-css[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: royalblue;\r\n}\r\n.pgm-javaScript[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #ffaf1c;\r\n}\r\n.pgm-nodeJS[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #009933;\r\n    font-weight: bold;\r\n}\r\n.pgm-c_Sharp[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #5900ff;\r\n}\r\n.pgm-php[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: rgb(31, 119, 235);\r\n}\r\n\r\n.fw-angular[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: #ff0000;\r\n}\r\n.fw-angular_material[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #3F51B5;\r\n}\r\n.fw-bootstrap[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: rgb(115, 94, 255);\r\n}\r\n.fw-wordpress[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: rgb(90, 182, 205);\r\n}\r\n\r\n.tl-vs_code[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: #247FB8;\r\n}\r\n.tl-vs.studio[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: #935FCE;\r\n}\r\n.tl-database[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: #FFB900;\r\n}\r\n.tl-git[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: #EF7F6A;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBLCtCQUErQjtBQUMvQjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFDQSwrQkFBK0I7QUFDL0I7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFDQSwrQkFBK0I7QUFDL0I7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wcm9maWxlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAjYWRiNWJkO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5wZ20taHRtbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbi5wZ20tY3NzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiByb3lhbGJsdWU7XHJcbn1cclxuLnBnbS1qYXZhU2NyaXB0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZhZjFjO1xyXG59XHJcbi5wZ20tbm9kZUpTIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDA5OTMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnBnbS1jX1NoYXJwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNTkwMGZmO1xyXG59XHJcbi5wZ20tcGhwIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiByZ2IoMzEsIDExOSwgMjM1KTtcclxufVxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZnctYW5ndWxhcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcbi5mdy1hbmd1bGFyX21hdGVyaWFsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjM0Y1MUI1O1xyXG59XHJcbi5mdy1ib290c3RyYXAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMTUsIDk0LCAyNTUpO1xyXG59XHJcbi5mdy13b3JkcHJlc3Mge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYig5MCwgMTgyLCAyMDUpO1xyXG59XHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi50bC12c19jb2RlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMjQ3RkI4O1xyXG59XHJcbi50bC12cy5zdHVkaW8ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM5MzVGQ0U7XHJcbn1cclxuLnRsLWRhdGFiYXNlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjRkZCOTAwO1xyXG59XHJcbi50bC1naXQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNFRjdGNkE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-material.module */ "B+Mi");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.routing */ "2OCZ");
/* harmony import */ var _profileList_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileList/profile.component */ "7QqR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_profile_routing__WEBPACK_IMPORTED_MODULE_4__["ProfileRouting"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profileList_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map