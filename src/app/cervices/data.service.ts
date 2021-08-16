import { Injectable } from '@angular/core';
import { Item } from '../models/myModels';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listItem: Item[] = [
   new Item( "aaa" ,250 ,15 ,"assets/img/boite-chocolat.jpg", "mixte" ),
   new Item( "aaa" ,150 ,11 ,"assets/img/boite-chocolat.jpg", "mixte" ),
   new Item( "aaa" ,350 ,23 ,"assets/img/boite-chocolat.jpg", "mixte" ),
   new Item( "aaa" ,100 ,9  ,"assets/img/boite-chocolat.jpg", "mixte" ),
   new Item( "bbb" ,250 ,24 ,"assets/img/m.jpg", "pralin" ),
   new Item( "bbb" ,150 ,15 ,"assets/img/m.jpg", "pralin" ),
   new Item( "bbb" ,350 ,33 ,"assets/img/m.jpg", "pralin" ),
   new Item( "bbb" ,100 ,13 ,"assets/img/m.jpg", "pralin" ),
   new Item( "bbb" ,300 ,30 ,"assets/img/m.jpg", "pralin" ),
   new Item( "ccc" ,150 ,22 ,"assets/img/coated fruits.jpg", "pruit" ),
   new Item( "ccc" ,250 ,30 ,"assets/img/coated fruits.jpg", "pruit" ),
   new Item( "ccc" ,100 ,15 ,"assets/img/coated fruits.jpg", "pruit" ),
   new Item( "ccc" ,300 ,33 ,"assets/img/coated fruits.jpg", "pruit" ),
  ];


  categorieSelected:Item[] = [];
  shoppingList:Item[] = [];

  getById(categorie: string) {
    if (this.categorieSelected.length > 0 && this.categorieSelected[0].categorie == categorie ) {
      console.log("==");
      return;
    }
    else {
      this.categorieSelected = []

      for (const item of this.listItem) {
        if (item.categorie == categorie) {
          this.categorieSelected.push(item);
        }        
      }
    }
  }

}