import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})

// Contiene la lógica (stateful)
export class StatefulComponent implements OnInit {
  
  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;
  
  // Model
  shopModel: Shop = new Shop();
  
  // Interface
  boughtItems: Array<Product>;

  // Solución simple... Débil frente a cmabios (descuentos)
  totalPrice: number;

  constructor() { 
    this.totalPrice = 0;
    this.boughtItems = [];
  }

  ngOnInit(): void {

  }

  clickItem(_curso){

    // Validación item ya añadido
    // Sumar los precios

    this.boughtItems.push(_curso);
    this.totalPrice += _curso.price;
  }

  cursoMatriculado(_event){
    this.clickItem(_event);
    this.confirmChild.isDisabled =false;
  }

  finalPrice(){
    if(this.boughtItems){
      return this.boughtItems.reduce((prev: number, item:Product) => prev + item.price, 0);
    }
  }

}
