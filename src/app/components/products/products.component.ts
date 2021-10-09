import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;

  // inject dependencies
  constructor(private dataService: DataService, private productService:ProductService) { }

  ngOnInit(): void {
    // console.log(this.dataService.products);
    // this.products = this.dataService.products;
    // this.products = this.dataService.showList();
    // this.products = this.dataService.showActives();
    this.productService.getProducts().subscribe(
      (res) =>{
        console.log(res);
        this.products = res;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
