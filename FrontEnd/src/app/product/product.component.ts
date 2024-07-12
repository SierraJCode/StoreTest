import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './interface/product.interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products:Product[] = []
  
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.productService.getProducts().subscribe(
      datos => {
        this.products = datos;
    })
  }

  deleteProduct(id:any){
    if(id){
      this.productService.deleteProduct(id).subscribe(
      res => {
        alert(id)
        this.getProducts()
      },
      err => console.log(err)
      )
    }
  }
}

