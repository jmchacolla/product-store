import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() productItem!: Product;
  @Output() newPurchase = new EventEmitter<Product>();
  constructor(
    private productService: ProductService,
    private router: Router,
  ){

  }

  setDefaultImage(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'https://static.thenounproject.com/png/2616533-512.png'; // Ruta de la imagen por defecto
  }

  addToCart(product:Product){
    this.newPurchase.emit(this.productItem);
  }

  goToDetail(productId: string){
    console.log('/products/'+ productId, 'ddddddddddddd');
    this.router.navigate(['/products/'+ productId])
  }


}
