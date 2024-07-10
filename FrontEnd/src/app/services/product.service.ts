import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/product`)
  }

  getProduct(id: string):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`)
  }

  createProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/product/`, product)
  }

  updateProduct(id: string, product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/product/${id}`, product)
  }
  
  deleteProduct(id: string):Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrl}/product/${id}`)
  }
}
