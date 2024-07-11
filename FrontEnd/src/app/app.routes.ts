import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormProductComponent } from './form-product/form-product.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product/create',
        component: FormProductComponent
    },
    {
        path: 'product/create/:id',
        component: FormProductComponent
    }
];
