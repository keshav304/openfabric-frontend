import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductApiService } from '../product-api.service';
import { Router } from '@angular/router';
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  productId!: string;
  product!: Product;
  categories: string[] = ['Category 1', 'Category 2', 'Category 3']; // Add your own category options here

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductApiService
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
      category: [''],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId).subscribe((product) => {
        this.product = product;
        this.populateForm();
      });
    });
    console.log(this.router)
  }

  populateForm() {
    this.productForm.patchValue({
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      category: this.product.category,
    });
  }

  onSubmit() {
    const updatedProductData = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price,
      category: this.productForm.value.category,
    };

    this.productService.updateProduct(this.product._id,updatedProductData).subscribe((updatedProduct) => {
      console.log('Product updated:', updatedProduct);
      this.router.navigateByUrl('/');
    }, (error) => {
      console.log('Error updating product:', error);
    });
  }
}
