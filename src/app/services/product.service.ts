import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.in/api/';
  serializaProduct: Product[] = [];

  constructor(private http: HttpClient) {}

  fetch(pageNumber: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}products?page=${pageNumber}&limit=${limit}`).pipe(map((data: any) => this.serializaProduct = data.products));
  }

  getProduct(productId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}products/${productId}`).pipe(map((data: any) => this.serializaProduct = data.product));
  }

  saveProduct(productData: any): Observable<any> {
    productData.discount = productData.discount.toString();
    productData.price = productData.price.toString();
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}products`,  productData, {headers} );
  }
}