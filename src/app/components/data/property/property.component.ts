import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // data 
  public username:string ="John Smith";
  public age:number =32;
  public message:string="Today is a good day!";
  public isMarried:boolean = true;

  public product:any = { 
    id:10101010,
    name:"Mac book Xyz series",
    price:897897.34,
    status:true,
    desc:"It is a wonderfull laptop"
  }

  public orders :any = ["Pizza Order","KFC Order", "Biryani Order","Dominos Order"]




  constructor() { }

  ngOnInit(): void {
  }

}
