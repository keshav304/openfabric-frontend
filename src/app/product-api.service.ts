import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  createdAt:string
}
@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/products`);
  }
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiBaseUrl}/product/${id}`);
  }
  addProduct(productData: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post(`${environment.apiBaseUrl}/product`, productData, { headers });
  }

  updateProduct(productId: string, productData: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.patch(`${environment.apiBaseUrl}/product/${productId}`, productData, { headers });
  }
  signup(userData: any): Observable<any> {
    const url = `${environment.apiBaseUrl}/signup`;
    return this.http.post(url, userData);
  }

  signin(userData: any): Observable<any> {
    const url = `${environment.apiBaseUrl}/signin`;
    return this.http.post(url, userData);
  }
}
