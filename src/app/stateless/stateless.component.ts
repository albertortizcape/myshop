import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})

// Sin lógica de negocio, solo pinta la información recibida por stateful
export class StatelessComponent implements OnInit {
  
  // Recibe información del componente padre
  @Input () product: Product;
  
  // Devuelve un evento al componente padre
  @Output () cursomatriculado: EventEmitter<Product> = new EventEmitter();

  public matricula: string;
  public disable: boolean;
 
  constructor() { }

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse(){
    this.disable = true;
    this.matricula = 'Ud. Está matriculado en este curso';
    
    // Emite un evento al componente stateful
    this.cursomatriculado.emit(this.product);
  }

  isdisabled() : boolean{
    return this.disable;
  }

}
