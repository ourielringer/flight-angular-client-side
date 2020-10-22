import { Component, OnInit } from '@angular/core';
import { ListFligthService } from 'src/app/service/list-fligth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(public svc:ListFligthService) { }
  ngOnInit(): void {
  }
  
  flight= this.svc.flightSelected
  passenger= this.svc.passenger

f(){
  console.log(this.flight);
  console.log(this.passenger);
  console.log(this.flight.numOfFlight);
  
  }
  

  

  // companyName
  // companyLogo
  // numberFligth
  // date = ''
  // from =''
  // fromhour=''
  // to =''
  // tohour =''
  // price = ''
  


  
  


}
