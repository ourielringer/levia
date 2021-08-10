import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  quantite:number = 1;
  price:number = 15;

  constructor() { }

  ngOnInit() {
  }

  quantitePlus(){
    this.quantite++;
    this.price +=29
  }
  quantiteMinus(){
    this.quantite--;
      if(this.quantite < 1){
        this.quantite = 1;
        return;
      } 
      this.price -= 29;
  }

}
