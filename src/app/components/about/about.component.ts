import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public products:any;
  public viewMode:string='';

  constructor(private dataSrv:DataService) { }

  ngOnInit(): void {
    this.products = this.dataSrv.products;
  }

}
