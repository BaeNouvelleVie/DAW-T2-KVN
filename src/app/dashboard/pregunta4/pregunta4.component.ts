import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta4',
  standalone: true,
  imports: [MaterialModule,FormsModule,CommonModule],
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})

export class Pregunta4Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  totalConDescuento: number = -1;

  calcularTotal(): void {
    let total = this.precioUnitario * this.cantidad;
    if (total > 200) {
      this.totalConDescuento = total * 0.8; 
    } else {
      this.totalConDescuento = total; 
    }
  }
}
