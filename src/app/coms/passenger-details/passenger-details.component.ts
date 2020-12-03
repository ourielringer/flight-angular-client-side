import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { newArray } from '@angular/compiler/src/util';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  constructor(public svc: ListFligthService, public svcHttp: HttpService) { }

  details: FormGroup
  recipeIngredients = new FormArray([]);

  get controls() {
    // a getter!
    return (this.details.get('arrayDetails') as FormArray).controls;
  }

  ngOnInit(): void {
    this.details = new FormGroup({
      arrayDetails: this.recipeIngredients
    })
    this.createfl()
  }

  createfl() {
    for (let i = 0; i < this.svc.adults + this.svc.babys; i++) {
      (this.details.get('arrayDetails') as FormArray).push(
        new FormGroup({
          firstname: new FormControl('', [Validators.required]),
          lastname: new FormControl(''),
          id: new FormControl(''),
          MorMr: new FormControl(''),
          age: new FormControl(''),
          sity: new FormControl(''),
        })
      );
    }
  }

  savedetails() {
    for (let i = 0; i < this.details.value.arrayDetails.length; i++) {
      console.log(this.svc.order.id);
      this.svc.listpassenger.push(this.details.value.arrayDetails[i])
      console.log('fff',this.svc.listpassenger);
      
      this.details.value.arrayDetails[i]["idorder"] =  this.svc.order.id
      this.details.value.arrayDetails[i]["idflightgo"] =  this.svc.flightSelected[0].id
      this.details.value.arrayDetails[i]["idflightback"] =  this.svc.flightSelected[1].id
      this.svcHttp.savePassengerDetails(this.details.value.arrayDetails[i]).subscribe(res => console.log(res))
    }
  }
}
