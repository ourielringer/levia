import { Component, ElementRef, ViewChild } from '@angular/core'
import { DataService } from './cervices/data.service';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Item } from './models/myModels';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  flagImg: boolean = true;


  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  myShoppingList: Item[];
  total = 0;


  constructor(public svcData: DataService, public rout: Router, config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.myShoppingList = svcData.shoppingList;
  }

  selectQategorie(id: string) {
    console.log(id);
    this.svcData.getById(id);

    this.flagImg = false;
    this.rout.navigate(['/frontpgag'])
  }

  totalPrice() {
    this.total = 0;
    for (const item of this.myShoppingList) {
      this.total += (item.price * item.quantite);
      console.log(this.total);
    }
  }

  deletItem(name:string, amount:number) {
    confirm("?האם אתה בטוח")
    for (let i = 0; i < this.myShoppingList.length; i++) {
      if (this.myShoppingList[i].name == name && this.myShoppingList[i].amount == amount) {
        this.myShoppingList.splice(i, 1)
        this.totalPrice()
      }
      else continue;
    }
  }

  payment(){
    console.log('payment');
    
    this.rout.navigate(['/payment'])
  }


}
