import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alert-messages',
  imports: [CommonModule],
  templateUrl: './alert-messages.component.html',
  styleUrl: './alert-messages.component.css'
})
export class AlertMessagesComponent {
  @Input() alerts: Alert[] = []; // Accepts multiple alerts

  closeAlert(index: number) {
    this.alerts.splice(index, 1); // Remove alert when closed
  }

  hasAlerts(): boolean {
    return this.alerts.length > 0; // Check if there are any alerts
  }
}
