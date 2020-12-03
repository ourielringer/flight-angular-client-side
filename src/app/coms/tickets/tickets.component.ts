import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/models';
import { ListFligthService } from 'src/app/services/list-fligth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(public svc:ListFligthService) { }
  ngOnInit(): void {
  }
  
  flight:Flight []= this.svc.flightSelected
  passenger= this.svc.passenger

f(){
  console.log(this.flight);
  console.log(this.passenger);
  
  
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
