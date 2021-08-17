import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/cervices/data.service';
import { Item } from 'src/app/models/myModels';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  quantity: number = 1;

  constructor(public svcData: DataService) { }

  ngOnInit() { }

  quantityPlus() {
    this.quantity++;
  }

  quantityMinus() {
    if (this.quantity <= 1) {
      return;
    }
    this.quantity--;
  }

  addItem() {
    if (this.svcData.shoppingList.length > 0) {

      for (let itemInList of this.svcData.shoppingList) {
        if (itemInList.name == this.item.name &&
          itemInList.amount == this.item.amount) {
          itemInList.quantite += this.quantity;
          return;
        }
        else {
          continue;
        }
      };
    }
    this.item.quantite = this.quantity;
    this.svcData.shoppingList.push(this.item);
    console.log(this.svcData.shoppingList);
  }

}
