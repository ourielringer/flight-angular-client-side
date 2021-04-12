import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { newArray } from '@angular/compiler/src/util';
import { HttpService } from 'src/app/services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  constructor(public router: Router,public svc: ListFligthService, public svcHttp: HttpService) { }

  details: FormGroup
  recipeIngredients = new FormArray([]);

  header:HttpHeaders

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
          ID: new FormControl(''),
          MorMr: new FormControl(''),
          age: new FormControl(''),
          sity: new FormControl(''),
        })
      );
    }
  }

  savedetails() {
    this.svc.listpassenger.push(...this.details.value.arrayDetails)
    console.log(this.svc.listpassenger);

    this.router.navigate(['/Payment'])
  }
}
