import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;

  // inject dependencies
  constructor(private dataService: DataService, private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    // console.log(this.dataService.products);
    // this.products = this.dataService.products;
    // this.products = this.dataService.showList();
    // this.products = this.dataService.showActives();
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProducts().subscribe(
      (res) => {
        // console.log(res);
        this.products = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    // console.log("on delete ", id);
    this.productService.deleteProduct(id).subscribe(
      res => { 
        console.log("Product is deleted !",id);
        this.getProducts();
       },
      err => { console.log("Product delete failed! ");}
    )
  }

  public onUpdate(product:any){
    // console.log(product);
    this.router.navigateByUrl('/products/update', { state: product});
  }

}
