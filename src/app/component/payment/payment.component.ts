import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  yearList: number[] = [];

  date: Date = new Date;
  thisYear = this.date.getFullYear()

  constructor() {

    for (let index = this.thisYear; index < this.thisYear + 30; index++) {
      this.yearList.push(index)        
    }
  }
  ngOnInit() {
  }

  paymentDetails = new FormGroup({
    name: new FormControl("",[Validators.required]),
    cardNumber: new FormControl('',[Validators.required]),
    month: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
    cvv: new FormControl('',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]),

  })

  payment(){
    console.log("function");
    
    console.log(this.paymentDetails.validator);
    console.log(this.paymentDetails.value);
    
  }

}
