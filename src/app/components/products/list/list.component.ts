import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  public show:boolean= false;
  ngOnInit(): void {
  }

  showMore(){
    this.show =! this.show;
  }

  product : any = {
    id:1010101023,
    name:'Apple MGN63HNA MacBook Air',
    price: 88490.345,
    desc: 'Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina), 33.78 cm (13.3 inch)',
    rating: 4.97455,
    launchDate:new Date(),
    para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem beatae, sapiente mollitia atque ipsam iusto sunt ex, illum non eius doloribus ad repudiandae. Ex neque fuga quod magnam, eligendi vel?'
  }

}
