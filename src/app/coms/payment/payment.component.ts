import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  paymentDetails = new FormGroup({
    name : new FormControl('', [Validators.required,]),
    cardNam : new FormControl('', []),
    expiry : new FormControl('', []),
    cvv: new FormControl("",[])
  })

  pyment(){
    this.router.navigate(['/ticket'])
  }

}
