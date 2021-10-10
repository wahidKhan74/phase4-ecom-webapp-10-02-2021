import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  public status:boolean= false;

  custom:any = {
    color:'green',
    fontsize: '30px',
    border:'2px solid black',
    background:'lightgreen',
    padding:'30px'
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateStatus() {
    this.status = !this.status;
  }
}
