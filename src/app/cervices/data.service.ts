import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listItem:Object[] =[ 
  {name:"aaa", amount:"250", price:"15", image:"assets/img/boite-chocolat.jpg"},
  {name:"aaa", amount:"150", price:"11", image:"assets/img/boite-chocolat.jpg"},
  {name:"aaa", amount:"350", price:"20", image:"assets/img/boite-chocolat.jpg"},
  {name:"bbb", amount:"100", price:"10", image:"assets/img/m.jpg"},
  {name:"bbb", amount:"300", price:"23", image:"assets/img/m.jpg"},
  {name:"ccc", amount:"250", price:"35", image:"assets/img/n.jpg"},
  {name:"bbb", amount:"250", price:"15", image:"assets/img/m.jpg"},
  {name:"ccc", amount:"250", price:"15", image:"assets/img/n.jpg"},
  {name:"ccc", amount:"350", price:"20", image:"assets/img/n.jpg"},
  {name:"bbb", amount:"100", price:"10", image:"assets/img/m.jpg"},
  {name:"aaa", amount:"300", price:"23", image:"assets/img/boite-chocolat.jpg"},
  {name:"ccc", amount:"250", price:"35", image:"assets/img/n.jpg"}
];
}
