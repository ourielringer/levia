import { Injectable } from '@angular/core';
import { Item } from '../models/myModels';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listItem: Item[] = [
    { name: "aaa", amount: "250", price: 15, image: "assets/img/boite-chocolat.jpg", categorie: "mixte" },
    { name: "aaa", amount: "150", price: 11, image: "assets/img/boite-chocolat.jpg", categorie: "mixte" },
    { name: "aaa", amount: "350", price: 20, image: "assets/img/boite-chocolat.jpg", categorie: "mixte" },
    { name: "bbb", amount: "100", price: 10, image: "assets/img/m.jpg", categorie: "pralin" },
    { name: "bbb", amount: "300", price: 23, image: "assets/img/m.jpg", categorie: "pralin" },
    { name: "ccc", amount: "250", price: 35, image: "assets/img/n.jpg", categorie: "pruit" },
    { name: "bbb", amount: "250", price: 15, image: "assets/img/m.jpg", categorie: "pralin" },
    { name: "ccc", amount: "250", price: 15, image: "assets/img/n.jpg", categorie: "pruit" },
    { name: "ccc", amount: "350", price: 20, image: "assets/img/n.jpg", categorie: "pruit" },
    { name: "bbb", amount: "100", price: 10, image: "assets/img/m.jpg", categorie: "pralin" },
    { name: "aaa", amount: "300", price: 23, image: "assets/img/boite-chocolat.jpg", categorie: "mixte" },
    { name: "ccc", amount: "250", price: 35, image: "assets/img/n.jpg", categorie: "pruit" }
  ];


  itemSelected: Item[] = [];

  getById(categorie: string) {
    if (this.itemSelected.length > 0 && this.itemSelected[0].categorie == categorie ) {
      console.log("==");
      return;
    }
    else {
      this.itemSelected = []
      console.log("gggggggggggg");

      for (const item of this.listItem) {
        if (item.categorie == categorie) {
          this.itemSelected.push(item);
        }
      }
    }
  }



}



