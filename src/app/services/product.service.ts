import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:3000/api/products';

  constructor(private httpClient: HttpClient) { }

  // get all products
  public getProducts() {
    return this.httpClient.get(this.url);
  }

  // get one product
  public getProduct(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add product
  public addProduct(product: any) {
    return this.httpClient.post(this.url, product);
  }

  // update product
  public updateProduct(product: any) {
    return this.httpClient.put(this.url, product);
  }

  // delete product
  public deleteProduct(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
