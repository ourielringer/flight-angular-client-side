import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Flight } from 'src/app/models/models';
import { Router } from '@angular/router';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { IfStmt } from '@angular/compiler';

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



  select() {
    console.log(this.flight);

    this.notpassengers.nativeElement.innerHTML = ""
    
    if (this.svc.adults == 0 && this.svc.babys == 0) {
      this.notpassengers.nativeElement.innerHTML = "No passenger selected"
      return
    }

   if(this.numPlace(this.flight) == false){
     console.log('reture');
     return
   }

    this.svc.flightSelected.push(this.flight)
      
    if (this.svc.goAndBack == false) {

      console.log(this.svc.goAndBack == false);
      console.log("1");
      this.raout.navigate(['/singup'])
    }

    else if (this.svc.flightSelected.length == 1) {
      alert ('נבחר רק צד אחד בנתיים');
    }
      
    else{
      console.log('2');
      this.raout.navigate(['/singup'])
    }
  }

  numPlace(flight){
     this.svc.SeatingAvailable = flight.numplaces - (this.svc.adults + this.svc.babys)
    if (this.svc.SeatingAvailable >= 0) {
      console.log(this.flight.numplaces);
      console.log(this.svc.goAndBack);
      return true

    } else {
      document.querySelector('.place').innerHTML = `only ${this.flight.numplaces} places left`
      return false
    }
  }

}



