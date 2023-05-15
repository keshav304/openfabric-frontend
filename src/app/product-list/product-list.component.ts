import { Component, OnInit } from '@angular/core';
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
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductApiService,private router: Router) {}
  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productService.getProducts()
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        (error: any) => {
          console.log('Error fetching products:', error);
        }
      );
  }

  redirectToDetail(productId: string) {
    console.log(productId);
    this.router.navigate(['/product', productId]);
  }
}

