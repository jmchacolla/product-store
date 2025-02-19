import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const routes: Routes = [

    { path: '', component: ProductListComponent},
    { path: 'products', redirectTo: ''},
    { path: 'products/:id', component: ProductDetailComponent},
    { path: 'product/create', component: CreateProductComponent}
];
