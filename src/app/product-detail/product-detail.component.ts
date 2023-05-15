import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../product-api.service';
import { Router } from '@angular/router';
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  createdAt:string
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductApiService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProduct(productId);
    } 
    console.log(this.router)
  }

  fetchProduct(productId: string) {
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error: any) => {
        console.log('Error fetching product:', error);
      }
    );
  }
}
