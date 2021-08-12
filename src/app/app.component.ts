import { Component } from '@angular/core';
import { DataService } from './cervices/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public svcData:DataService){}

  getItem(id:string){
    console.log(id);
    this.svcData.getById(id);
  }
}
