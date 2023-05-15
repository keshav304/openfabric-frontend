// HeaderComponent TypeScript file
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    // Check if user is logged in by verifying the presence of user data in local storage
    return !!localStorage.getItem('user');
  }


  navigateTo(path: string): void {
    // Navigate to the specified path
    this.router.navigate([path]);
  }

  logout(): void {
    // Clear user data and token from local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // Redirect to the sign-in page
    this.router.navigate(['/signin']);
  }
}
