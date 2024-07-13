import { Component } from '@angular/core';
import { Product } from '../product/interface/product.interface';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  
  product: Product = {
    name: '',
    description: '',
    price: 0,
    img: '',
    createdAt: '',
  }

  edit: boolean = false;

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['id']){
      this.productService.getProduct(params['id']).subscribe(
        res => {
          this.product = res
          this.edit = true
        },
        err => console.log(err)
      )
    }else{
      this.edit = false;
    }
  }

  createProduct(){
    return this.productService.createProduct(this.product).subscribe(
      res => {
        alert('Create')
      },
      err => console.log(err)
    )
  }

  updateProduct(){
    if(this.product._id){
      this.productService.updateProduct(this.product._id, this.product).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/'])
        }
      )
    }
  }
}
