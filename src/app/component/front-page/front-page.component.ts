import { DataService } from 'src/app/cervices/data.service';
import { Component, OnInit } from'@angular/core';
import { Item } from 'src/app/models/myModels';



@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  // myShoppingList:Item[];
  // total = 0;

  constructor(public svcData:DataService){    
    // this.myShoppingList = svcData.shoppingList;
  }
  
  ngOnInit() {
  }

  // totalPrice(){
  //   for (const item of this.myShoppingList) {

  //     this.total+= (item.price * item.amount);
  //     console.log(this.total);
  //   }
    
  // }

 
}
