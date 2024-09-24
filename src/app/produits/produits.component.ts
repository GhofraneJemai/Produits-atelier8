import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  produits : string[] ; 
  constructor() { 
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"]; 
   } 

}
