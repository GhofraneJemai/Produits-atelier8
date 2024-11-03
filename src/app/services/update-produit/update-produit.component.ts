import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Categorie } from '../../model/categorie.model';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: ``
})
export class UpdateProduitComponent implements OnInit {
  categories! : Categorie[];
  updatedCatId! : number;
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentProduit = prod; } ) ;
  }
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    }
}
