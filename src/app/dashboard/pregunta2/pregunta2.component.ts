import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule,FormsModule,CommonModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})

export class Pregunta2Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  total: number = 0;

  calcularTotal(): void {
    if (this.cantidad > 20) {
      this.total = this.precioUnitario * this.cantidad * 0.9; // 10% de descuento
    } else if (this.cantidad > 10) {
      this.total = this.precioUnitario * this.cantidad * 0.95; // 5% de descuento
    } else {
      this.total = this.precioUnitario * this.cantidad; // sin descuento
    }
  }
}