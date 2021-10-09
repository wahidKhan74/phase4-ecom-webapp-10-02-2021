import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // sample object array // sample json array
  public products:any = [
    { id: 1001, name: "Mac book xyz series", price:367435, desc:"It is a laptop", brand:"apple", active:true},
    { id: 1002, name: "Dell book xyz series", price:78435, desc:"It is a laptop", brand:"dell",active:true},
    { id: 1003, name: "Hp book xyz series", price:893435, desc:"It is a laptop", brand:"hp",active:false},
    { id: 1004, name: "Lenovo book xyz series", price:783435, desc:"It is a laptop", brand:"lenovo",active:true},
    { id: 1005, name: "Acer book xyz series", price:903435, desc:"It is a laptop", brand:"acer",active:true},
    { id: 1006, name: "Assus book xyz series", price:893435, desc:"It is a laptop", brand:"assus",active:false},
  ]

  showList():any {
    return this.products;
  }

  showActives():any {
    return this.products.filter(function(product:any) {
      return product.active;
    });
  }

  constructor() { }
}
