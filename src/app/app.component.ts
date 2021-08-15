import { Component } from '@angular/core'
import { DataService } from './cervices/data.service';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  flagImg:boolean = true;

  
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(public svcData:DataService, public rout:Router, config: NgbCarouselConfig){
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  getItem(id:string){
    console.log(id);
    this.svcData.getById(id);

    this.flagImg = false;
    this.rout.navigate(['/frontpgag'])
  }


  
}
