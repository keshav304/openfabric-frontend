// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router,UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    console.log(user, token)
    if (user && token) {
      // User is logged in, allow access
      return true;
    } else {
      // User is not logged in, redirect to login page
      return this.router.createUrlTree(['/signin']);
    }
  }
}