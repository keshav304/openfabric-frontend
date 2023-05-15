import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildSigninForm();
  }

  buildSigninForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  handleSignin() {
    const { email, password } = this.signinForm.value;
    this.productService.signin({ email, password })
      .subscribe((response: any) => {
        // Store user and token data in local storage
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        console.error(error);
      });
  }
}
