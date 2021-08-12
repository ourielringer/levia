import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/cervices/data.service';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(public svcData:DataService){}

  ngOnInit() {
  }
  // showNavigationArrows = false;
  // showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // constructor(config: NgbCarouselConfig) {
  //   // customize default values of carousels used by this component tree
  //   config.showNavigationArrows = true;
  //   config.showNavigationIndicators = true;
  // }
}
