import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,NavbarComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product!: Product;
  total: number = 0;
  shoppingCart: Product[] = [];

  constructor(
    private productService: ProductService,
    private activeroute: ActivatedRoute,
    private router: Router
  ){
    const productId = Number(this.activeroute.snapshot.paramMap.get('id'));
    this.productService.getProduct(productId).subscribe(product => this.product = product);
  }
  setDefaultImage(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'https://static.thenounproject.com/png/2616533-512.png'; // Ruta de la imagen por defecto
  }

  goToList(){
    this.router.navigate(['products']);
  }
}
