import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, NgbCollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isCollapsed: boolean = true ;

  @Input() productList!: Product[];
  @Input() total: number;

  constructor (private productService: ProductService) {
    this.total = 0;
  }
}
