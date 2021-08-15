import { DataService } from 'src/app/cervices/data.service';
import { Component, OnInit } from'@angular/core';



@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(public svcData:DataService){}

  ngOnInit() {
  }

 
}
