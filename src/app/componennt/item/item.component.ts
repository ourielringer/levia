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

  quantite: number = 1;

  constructor(public svcData: DataService) { }

  ngOnInit() { }

  quantitePlus(this) {
    this.quantite++;
  }

  quantiteMinus() {
    if (this.quantite <= 1) {
      return;
    }
    this.quantite--;
  }

  addItem(this:any) {
    let item = new Item(this.item.name, this.item.amount, this.item.price, "", "");
    item.quantite = this.quantite;
    this.svcData.shoppingList.push(item);
    console.log(this.svcData.shoppingList);
  }

}
