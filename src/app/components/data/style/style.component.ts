import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  // data 
  public username:string ="John Smith";
  public age:number =32;
  public message:string="Today is a good day!";
  public isMarried:boolean = false;
  public colors :any = {
    red : '#FF0000',
    green :'#00FF00',
    blue :' #0000FF'
  }

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
