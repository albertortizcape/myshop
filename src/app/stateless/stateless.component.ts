import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})

// Sin lógica de negocio, solo pinta la información recibida por stateful
export class StatelessComponent implements OnInit {
  @Input () product: Product;

  public matricula: string;
  public disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse(){
    this.disable = true;
    this.matricula = 'Ud. Está matriculado en este curso';
  }

  isdisabled() : boolean{
    return this.disable;
  }

}
