import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListFligthService } from 'src/app/service/list-fligth.service';


@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  constructor(public svc:ListFligthService) { }

  ngOnInit(): void {
  }
  
  

   details = new FormGroup({
    firstname: new FormControl(`${this.svc.passenger.name}`, Validators.minLength(5)),
    lastname: new FormControl('',[Validators.required]),
    id: new FormControl('',[Validators.required,]),
    address: new FormControl('',[Validators.required]),
    email: new FormControl(`${this.svc.passenger.emil}`,[Validators.required]),
    sity: new FormControl('',[Validators.required]),

  })

  savedetails(){
   console.log( this.details.value);
   
  }


}
