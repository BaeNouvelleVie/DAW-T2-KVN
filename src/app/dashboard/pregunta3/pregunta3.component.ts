import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule,FormsModule,CommonModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})

export class Pregunta3Component {
  cantidadLlantas: number = 0;
  totalCosto: number = -1;

  calcularCosto(): void {
    if (this.cantidadLlantas < 5) {
      this.totalCosto = this.cantidadLlantas * 800;  
    } else {
      this.totalCosto = this.cantidadLlantas * 700;  
    }
  }
}