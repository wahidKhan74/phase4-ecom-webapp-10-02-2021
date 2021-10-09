import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public productForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private productSrv:ProductService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.productForm = this.fromBuilder.group({
      id:[''],
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      price: ['',[Validators.required]],
      description: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap .pipe(() => window.history.state);
    // console.log(this.state);
    // fill the fields
    this.productForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.productForm.value);
      //call a update product method from service.
      this.productSrv.updateProduct(this.productForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/products");
      });      
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
