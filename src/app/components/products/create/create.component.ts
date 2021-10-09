import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public productForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private productSrv:ProductService, private router:Router) {
    this.productForm = this.fromBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      price: ['',[Validators.required]],
      description: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.productForm.value);
      //call a add product method from service.
      this.productSrv.addProduct(this.productForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/products");
      })
      
    } else {
      console.log("Invalid Form !");
      this.validateForm(loginForm);
    }
  }

  public validateForm(form: any) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else{
        this.validateForm(control)
      }
    })
  }

  hasError(field: any) {
    return (this.productForm.get(field)?.invalid && this.productForm.get(field)?.touched && this.productForm.get(field)?.errors);
  }
  get f() {
    return this.productForm.controls;
  }

}
