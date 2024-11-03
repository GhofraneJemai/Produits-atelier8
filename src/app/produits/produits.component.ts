import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

    produits? : Produit[]; //un tableau de produits

  constructor(private produitService: ProduitService) {
   //this.produits=[];
     }

  ngOnInit(): void {
    this.chargerProduits();

  }
  chargerProduits(){
    this.produitService.listeProduits().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
    }
    supprimerProduit(p: Produit) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
          if (p.idProduit !== undefined) { // Vérifiez si idProduit est défini
              this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
                  console.log("produit supprimé");
                  this.chargerProduits();
              });
          } else {
              console.error("idProduit est indéfini");
          }
      }
  }
  

}