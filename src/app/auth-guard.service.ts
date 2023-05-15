// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('user') !== null;

    // If user is authenticated, redirect to home page
    if (isAuthenticated) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
