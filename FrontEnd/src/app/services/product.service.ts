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

  getProduct(id: string){
    return this.http.get(`${this.apiUrl}/product/${id}`)
  }

  createProduct(product: Product){
    return this.http.post(`${this.apiUrl}/product/`, product)
  }

  updateProduct(id: string, product: Product){
    return this.http.put(`${this.apiUrl}/product/${id}`, product)
  }
  
  deleteProduct(id: string){
    return this.http.delete(`${this.apiUrl}/product/${id}`)
  }
}
