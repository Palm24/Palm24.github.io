import { Component, OnInit } from '@angular/core';
import { workList } from '../entities/works.entity';

@Component({
  selector: 'app-works',
  templateUrl: './workList.component.html',
  styleUrls: ['./workList.component.css']
})
export class WorksComponent implements OnInit {

  img1: string = "./assets/images/2.jpg";
  img2: string = "./assets/images/2.jpg";
  img3: string = "./assets/images/2.jpg";
  img4: string = "./assets/images/5.jpg";
  img5: string = "./assets/images/2.jpg";
  img6: string = "./assets/images/6.jpg";
  img7: string = "./assets/images/9.jpg";
  img8: string = "./assets/images/9.jpg";
  img9: string = "./assets/images/9.jpg";

  works1: workList[] = [
    {
      img: './assets/images/2.jpg',
      item: 'Basic E-commerce Website',
      level: 'Graduation Project (4th.)',
      detail: 'เป็นโปรเจคจบปี 4 ที่เกี่ยวกับเว็บไซต์ e-commerce หรือร้านค้าออนไลน์ซึ่งเกี่ยวกับการขายเครื่องกรองน้ำและอุปกรณ์ต่างๆ ซึ่งสามารถใช้งานได้จริง' +
              'และมีหลังบ่านที่สามารถเก็บข้อมูลและตรวจสอบประวัติคำสั่งซื้อของลูกค้า รวมถึงการแสดงยอดขายรายวัน เดือนและปี ในรูปแบบกราฟ .......'
    },
    {
      img: './assets/images/2.jpg',
      item: 'Web developer',      
      level: 'Intern (4th. University)',
      detail: 'ศึกษาการสร้างเว็บไซต์ e-commerce ด้วย Wordpress และ Plugin Woo-commerce รวมถึงการใช้ Plugin ของ Wordpress ' +
              'ในการสร้าง ตกแต่ง หรือแก้ไขในหน้าเพจต่างๆ และศึกษาเรื่องการสร้างและพัฒนา Line Chat bot ที่สามารถตอบโต้กะลูกค้าได้.....'
    },
    {
      img: './assets/images/2.jpg',
      item: 'Web developer',     
      level: 'Intern (4th. University)',
      detail: 'ศึกษาและพัฒนาเกี่ยวกับการสร้าง Google Map โดยไม่ใช้ Google Map Api ซึ่งสามารถค้นหาข้อมูล และนำข้อมูลนั้นปักหมุดลงใน Google Map ได้ และแสดงข้อมูลนั้นออกมาเป็นรายการ เมื่อกดที่ข้อมูลนั้นสามารถเลื่อนไปยังสถานที่ที่ปักหมุดในแผนที่ได้..............'
    },
  ]

  works2: workList[] = [
    {
      img: './assets/images/2.jpg',
      item: 'Web developer',      
      level: 'Intern (4th. University)',
      detail: '(รูปซ้าย) ศึกษาการสร้างเว็บไซต์ e-commerce ด้วย Wordpress และ Plugin Woo-commerce รวมถึงการใช้ Plugin ของ Wordpress ' +
              'ในการสร้าง ตกแต่ง หรือแก้ไขในหน้าเพจต่างๆ และศึกษาเรื่องการสร้างและพัฒนา Line Chat bot ที่สามารถตอบโต้กะลูกค้าได้.....'
    },
    {
      img: './assets/images/6.jpg',
      item: 'Web developer',     
      level: '(รูปขวา) Intern (4th. University)',
      detail: 'ศึกษาและพัฒนาเกี่ยวกับการสร้าง Google Map โดยไม่ใช้ Google Map Api ซึ่งสามารถค้นหาข้อมูล และนำข้อมูลนั้นปักหมุดลงใน Google Map ได้ และแสดงข้อมูลนั้นออกมาเป็นรายการ เมื่อกดที่ข้อมูลนั้นสามารถเลื่อนไปยังสถานที่ที่ปักหมุดในแผนที่ได้..............'
    },
  ]

  works3: workList[] = [
    {
      img: './assets/images/9.jpg',
      item: '',
      level: 'คอร์สออนไลน์',
      detail: ''
    },
    {
      img: './assets/images/9.jpg',
      item: 'Web developer',      
      level: 'Intern (4th. University)',
      detail: '(รูปซ้าย) ศึกษาการสร้างเว็บไซต์ e-commerce ด้วย Wordpress และ Plugin Woo-commerce รวมถึงการใช้ Plugin ของ Wordpress ' +
              'ในการสร้าง ตกแต่ง หรือแก้ไขในหน้าเพจต่างๆ และศึกษาเรื่องการสร้างและพัฒนา Line Chat bot ที่สามารถตอบโต้กะลูกค้าได้.....'
    },
    {
      img: './assets/images/9.jpg',
      item: 'Web developer',     
      level: '(รูปขวา) Intern (4th. University)',
      detail: 'ศึกษาและพัฒนาเกี่ยวกับการสร้าง Google Map โดยไม่ใช้ Google Map Api ซึ่งสามารถค้นหาข้อมูล และนำข้อมูลนั้นปักหมุดลงใน Google Map ได้ และแสดงข้อมูลนั้นออกมาเป็นรายการ เมื่อกดที่ข้อมูลนั้นสามารถเลื่อนไปยังสถานที่ที่ปักหมุดในแผนที่ได้..............'
    },
  ]

  constructor() { }

  ngOnInit(): void {}

}
