import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private produitService: ProduitService,
              private router: Router
  ) { }

  ngOnInit(): void {
    // this.categories = this.produitService.listeCategories();
  }
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
    }

}