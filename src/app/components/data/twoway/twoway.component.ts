import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  public username:string ="John Smith";
  public status:boolean =false;
  public message:string="Today is a good day!";
  public email:string ="";


  public onInput($event:any) {
    // console.log($event.target.value);
    this.email = $event.target.value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
