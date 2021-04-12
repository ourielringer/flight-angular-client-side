import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(private httpServis:HttpService) { }

  div
  ifdelete: boolean = false;

  ngOnInit(): void {
    this.div = document.getElementById('mydialog')
    this.div.showModal()
  }

  permition = new FormGroup({
    name: new FormControl(""),
    password: new FormControl(''),
  })

  deleteflight = new FormGroup({
    flightnumber: new FormControl('', [Validators.required,]),
    date: new FormControl('', [Validators.required, Validators.minLength(4),])
  })

  delete() {
    this.ifdelete = true;

    console.log(this.deleteflight.value.flightnumber);

    if (this.deleteflight.value.flightnumber != '' && this.deleteflight.value.date != '') {

      console.log("fff");

      this.ifdelete = false;

    }
  }

  enter(){
    this.httpServis.getmanager(this.permition.value)
    this.div.close('cancelling');
  }

}
