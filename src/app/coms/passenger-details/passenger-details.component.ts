import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  constructor(public svc: ListFligthService) { }
  details: FormGroup

  array =[0,1,2,3]

  get controls() {
    // a getter!
    return ( this.details.get('arrayDetails') as FormArray).controls;
  }

  ngOnInit(): void {
    this.initForm()
    this.createfl(this.svc.adults+ this.svc.babys)
  }

  initForm() {
    this.details = new FormGroup({
      arrayDetails: new FormArray([])
    })
  }

  createfl(num :number) {

    for (let i = 0; i < num; i++) {
      (this.details.get('arrayDetails') as FormArray).push(
        new FormGroup({
          firstname: new FormControl('', [Validators.required]),
          lastname: new FormControl(''),
          id: new FormControl(''),
          address: new FormControl(''),
          email: new FormControl(''),
          sity: new FormControl(''),
        })
      );
    }
  }
  savedetails() {
    console.log(this.details.value);
  }
}
