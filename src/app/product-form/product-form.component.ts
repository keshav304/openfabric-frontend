// product-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.productService.addProduct(productData).subscribe(
        (response) => {
          console.log('Product created successfully:', response);
          this.router.navigateByUrl('/');
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      console.log('Invalid form data. Please fill in all the required fields.');
    }
  }
}



