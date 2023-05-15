// product-card.component.ts
import { Component, Input } from '@angular/core';
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
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  constructor(private router: Router) {}
  redirectToEdit(productId: string) {
    this.router.navigate(['/product','edit',productId]);
  }
  isLoggedIn(): boolean {
    // Check if user is logged in by verifying the presence of user data in local storage
    return !!localStorage.getItem('user');
  }
}
