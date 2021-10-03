import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public username:string ="John Smith";
  public status:boolean =false;
  public message:string="Today is a good day!";
  public email:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.username);
    console.log(this.message);
    this.status = !this.status;
  }

  public onInput($event:any) {
    // console.log($event.target.value);
    this.email = $event.target.value;
  }
  public onMouseOver() {
    console.log("Mouse Over Event");
  }
}
