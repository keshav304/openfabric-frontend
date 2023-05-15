import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.buildSignupForm();
  }

  buildSignupForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  handleSignup() {
    const { name, email, password } = this.signupForm.value;
    this.productService.signup({ name, email, password })
      .subscribe((response: any) => {
        // Store user and token data in local storage
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        // Redirect to desired page or perform other actions
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        // Handle error here, such as displaying an error message
        console.error(error);
      });
  }
}
