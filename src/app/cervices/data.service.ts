import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  listItem:Object[] =[ 
  {name:"aaa", amount:"250", price:"15"},
  {name:"aaa", amount:"250", price:"15"},
  {name:"aaa", amount:"350", price:"20"},
  {name:"bbb", amount:"100", price:"10"},
  {name:"aaa", amount:"300", price:"23"},
  {name:"ccc", amount:"250", price:"35"},
  {name:"aaa", amount:"250", price:"15"},
  {name:"aaa", amount:"250", price:"15"},
  {name:"aaa", amount:"350", price:"20"},
  {name:"bbb", amount:"100", price:"10"},
  {name:"aaa", amount:"300", price:"23"},
  {name:"ccc", amount:"250", price:"35"}
];
}
