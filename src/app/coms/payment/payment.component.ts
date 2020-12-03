import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { HttpService } from 'src/app/services/http.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public router: Router, public svc: ListFligthService, public httpservis: HttpService) { }

  gopriceadult: number
  gopricebaby: number
  backpriceadult: number
  backpricebaby: number
  sumgo: number = 0
  sumback: number = 0

  bagaje = 0
  handbag = 0
  meal = 0

  alertBox = false

  ngOnInit(): void {
    this.gopriceadult = this.svc.adults * parseInt(this.svc.flightSelected[0].price)
    this.gopricebaby = parseInt(this.svc.flightSelected[0].price) / 2 * this.svc.babys

    this.backpriceadult = this.svc.adults * parseInt(this.svc.flightSelected[1].price)
    this.backpricebaby = parseInt(this.svc.flightSelected[1].price) / 2 * this.svc.babys

    this.sumgo = this.gopriceadult + this.gopricebaby
    this.sumback = this.backpriceadult + this.backpricebaby
  }

  paymentDetails = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    cardNam: new FormControl('', []),
    expiry: new FormControl('', []),
    cvv: new FormControl("", [])
  })

    pyment() {
    confirm('האם הינך בטוח ?')
    for (const flight of this.svc.flightSelected) {
      this.httpservis.updatenumplase(flight.id, this.svc.SeatingAvailable).subscribe(async res => {
        console.log(res)
        this.alertBox = true;
        this.home()
       
      })
    }
  }

  home(){
    setTimeout(function () {
      this.alertBox = false
      this.router.navigate([''])
    }, 3000)
  }

  bagajplus() {
    this.bagaje++

    this.sumback += 30
    this.sumgo += 30
    console.log(this.bagaje >= 3);

    if (this.bagaje >= 3 * this.svc.sumPassaenger.length) {
      this.bagaje = 3
    }
  }

  bagajminus() {
    this.bagaje--
    if (this.bagaje <= 0) {
      this.bagaje = 0
    }
    this.sumback -= 30
    this.sumgo -= 30

    if (this.sumback <= 0 || this.sumgo <= 0) {
      this.sumback = 0
      this.sumgo = 0
    }

  }

  handbagplus() {
    this.handbag++
    this.sumback += 8
    this.sumgo += 8

    if (this.handbag >= 3 * this.svc.sumPassaenger.length) {
      this.handbag = 3
    }
  }

  handbagminus() {
    this.handbag--
    if (this.handbag <= 0) {
      this.handbag = 0
    }

    this.sumback -= 8
    this.sumgo -= 8
    if (this.sumback <= 0 || this.sumgo <= 0) {
      this.sumback = 0
      this.sumgo = 0
    }
  }

  mealplus() {
    this.meal++
    this.sumback += 10
    this.sumgo += 10
    console.log(this.svc.sumPassaenger.length);

    if (this.meal == this.svc.sumPassaenger.length) {
      this.meal = this.svc.sumPassaenger.length
    }
  }

  mealminus() {
    this.meal--
    if (this.meal <= 0) {
      this.meal = 0
    }

    this.sumback -= 10
    this.sumgo -= 10

    if (this.sumback <= 0 || this.sumgo <= 0) {
      this.sumback = 0
      this.sumgo = 0
    }
  }
}
