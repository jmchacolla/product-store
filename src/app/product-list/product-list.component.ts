import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CardComponent } from "../card/card.component";
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, CardComponent, NavbarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{

  productList: Product[] = [];
  shoppingCart: Product[] = [];
  cartTotal: number = 0;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.fetch().subscribe({
      next: (data) => this.productList = data,
      error: (err) => console.log('Error:', err)
    });
  }

  addNewPurchase(newPurchase: Product){
    this.shoppingCart.push(newPurchase);
    let newCartTotal = this.shoppingCart.reduce((sum, product) => sum + product.price, 0);
    this.cartTotal = parseFloat(newCartTotal.toFixed(2));
  }

}
