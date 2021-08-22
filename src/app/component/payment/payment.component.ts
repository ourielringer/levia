import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  

  date: Date = new Date;
  yearList: number[] = [];
  thisYear = this.date.getFullYear()

  paymentDetails: FormGroup;
  submittted:boolean = false;

  constructor() {

    for (let index = this.thisYear; index < this.thisYear + 30; index++) {
      this.yearList.push(index)
    }
  }

  ngOnInit() {
    this.paymentDetails = new FormGroup({
      name: new FormControl("", [Validators.required]),
      cardNumber: new FormControl('', [Validators.required,Validators.maxLength(12),Validators.minLength(12)]),
      month: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]),

    })
  }


  onSubmit() {
    this.submittted = true;

    if(this.paymentDetails.valid){

      console.log(this.paymentDetails.value);
      // console.log(this.paymentDetails.value.name.errors);
      console.log(this.paymentDetails.controls.cardNumber);
    }
    
  }


  // strikeCheckout:any = null;

  // ngOnInit() {
  //   this.stripePaymentGateway();
  // }

  // checkout(amount) {
  //   const strikeCheckout = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken)
  //       alert('Stripe token generated!');
  //     }
  //   });

  //   strikeCheckout.open({
  //     name: 'RemoteStack',
  //     description: 'Payment widgets',
  //     amount: amount * 100
  //   });
  // }

  // stripePaymentGateway() {
  //   if(!window.document.getElementById('stripe-script')) {
  //     const scr = window.document.createElement("script");
  //     scr.id = "stripe-script";
  //     scr.type = "text/javascript";
  //     scr.src = "https://checkout.stripe.com/checkout.js";

  //     scr.onload = () => {
  //       this.strikeCheckout = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
  //         locale: 'auto',
  //         token: function (token: any) {
  //           console.log(token)
  //           alert('Payment via stripe successfull!');
  //         }
  //       });
  //     }

  //     window.document.body.appendChild(scr);
  //   }
  // }

}
