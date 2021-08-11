import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/cervices/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  quantite:number = 1;
  price:number = 15;
  total:number = this.price;

  arr:number[] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  constructor(public svcData:DataService) { }

  ngOnInit() {
  }

  quantitePlus(){
    this.quantite++;
    this.total += this.price; 
  }
  quantiteMinus(){
    if( this.quantite <= 1 ){
      return;
    } 
    this.quantite--;
    this.total -= this.price;
  }

}
