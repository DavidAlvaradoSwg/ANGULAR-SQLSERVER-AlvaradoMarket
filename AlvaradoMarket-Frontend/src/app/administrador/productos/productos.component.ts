import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para ngFor
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { Producto } from '../../models/producto.model'; // Importa la interfaz Producto

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrega CommonModule y FormsModule aquí
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.sass'
})
export class ProductosComponent implements OnInit {
  // Usamos la interfaz para tener un tipado fuerte
  producto: Partial<Producto> = {}; // Usamos Partial para el formulario, ya que puede estar incompleto
  productos: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes cargar la lista de productos existentes
    // Por ahora, usamos datos de ejemplo
    this.productos = [
      { idProducto: 1, nombre: 'Laptop', marca: 'Dell', precio: 1200, detalles: 'Core i7, 16GB RAM' },
      { idProducto: 2, nombre: 'Mouse', marca: 'Logitech', precio: 50, detalles: 'Wireless gaming mouse' }
    ];
  }

  guardarProducto(): void {
    if (this.producto.idProducto) {
      // Lógica para editar un producto existente (se puede implementar después)
    } else {
      // Lógica para agregar un nuevo producto
      const nuevoProducto: Producto = {
        idProducto: this.productos.length + 1, // ID simple para el ejemplo
        nombre: this.producto.nombre || '',
        marca: this.producto.marca || '',
        precio: this.producto.precio || 0,
        detalles: this.producto.detalles || ''
      };
      this.productos.push(nuevoProducto);
    }
    // Limpiar el formulario
    this.producto = {};
  }
}
