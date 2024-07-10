import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get(`${this.apiUrl}/product`)
  }

}
