import { Component } from '@angular/core';
import { Product } from '../product/interface/product.interface';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {

  constructor(private productService: ProductService, private router: Router){}

  product: Product = {
    _id: '',
    name: '',
    description: '',
    price: 0,
    img: '',
    createdAt: '',
  }
  createProduct(){
    return this.productService.createProduct(this.product).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }
}
