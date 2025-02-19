import { Component, inject, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { AlertMessagesComponent } from '../shared/alert-messages/alert-messages.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-create-product',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, AlertMessagesComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  private formBuilder = inject(FormBuilder);
  alerts: { type: string; message: string }[] = [];

  constructor(
      private activeroute: ActivatedRoute,
      private router: Router,
      private productService: ProductService
    ){
    }

  productForm = this.formBuilder.group({
    title: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
    color: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required],
    discount: ['', Validators.required],
  });

  onSubmit() {

    console.log(this.productForm.value);
    if (this.productForm.valid) {
      this.productService.saveProduct(this.productForm.value).subscribe({
        next: (response) =>{
          console.log('saved', response);
          this.addAlert("success", "Product added successfully.");
          this.productForm.reset();
        },
        error: (err) => {
          console.log('error to save', err);
          this.addAlert("danger", err.message);
        },
        complete() {
          console.log('completed');
        },
      })
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  getErrorMessage(field: string): string {
    const control = this.productForm.get(field);
    if (control?.hasError('required')) return 'This field is required.';
    if (control?.hasError('email')) return 'Invalid email format.';
    if (control?.hasError('minlength')) return `Must be at least ${control.errors?.['minlength'].requiredLength} characters.`;
    return '';
  }

   // Helper function to check if a field is invalid
   isFieldInvalid(field: string) {
    return this.productForm.get(field)?.invalid && this.productForm.get(field)?.touched;
  }

  goToList(){
    this.router.navigate(['products']);
  }

  addAlert(type:string, message: string) {
    this.alerts.push({ type: type, message: message });
  }

  addErrorAlert() {
    this.alerts.push({ type: 'danger', message: 'Error saving the product.' });
  }

  clearAlerts() {
    this.alerts = []; // Removes all alerts
  }

}
