import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Flight } from 'src/app/models/models';
import { Router } from '@angular/router';
import { ListFligthService } from 'src/app/services/list-fligth.service';

@Component({
  selector: 'app-findflight',
  templateUrl: './findflight.component.html',
  styleUrls: ['./findflight.component.css']
})
export class FindflightComponent implements OnInit {

  constructor(public svc: ListFligthService, private raout: Router) { }

  ngOnInit(): void {
  }

  @ViewChild("notpassengers") notpassengers: ElementRef

  @Input() flight: Flight
  @Input() numepassengers = ''



  select(fligth) {
    this.notpassengers.nativeElement.innerHTML = ""
    console.log(this.flight);

    if (this.svc.adults == 0) {
      this.notpassengers.nativeElement.innerHTML = "No adult passenger selected"
      return
    }

    this.flight.numFreeplaces = fligth.numplaces;
    let plase = parseInt(this.flight.numFreeplaces) - (this.svc.adults + this.svc.babys)
    if (plase >= 0) {

      this.svc.flightSelected = fligth

      this.flight.numFreeplaces = plase.toString()

      console.log(this.flight.numFreeplaces);

      this.raout.navigate(['/singup'])
    }

    else {
      document.querySelector('.place').innerHTML = `only ${this.flight.numFreeplaces} places left`
    }
  }
}


