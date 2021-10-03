import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder) {
    this.registerForm = this.fromBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      lastName: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(15)]],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      agree: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      console.log(this.registerForm.value);
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
    return (this.registerForm.get(field)?.invalid && this.registerForm.get(field)?.touched && this.registerForm.get(field)?.errors);
  }
  get f() {
    return this.registerForm.controls;
  }
}
