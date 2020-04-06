import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})

// Contiene la lógica (stateful)
export class StatefulComponent implements OnInit {
  
  // Model
  shopModel: Shop = new Shop();
  
  // Interface
  boughtItems: Array<Product>;

  constructor() { 
    
    this.boughtItems = [];
  }

  ngOnInit(): void {

  }

  clickItem(_curso){

    // Validación item ya añadido
    // Sumar los precios

    this.boughtItems.push(_curso);
  }

}
