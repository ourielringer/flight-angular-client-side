import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/models';
import { ListFligthService } from 'src/app/service/list-fligth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findflight',
  templateUrl: './findflight.component.html',
  styleUrls: ['./findflight.component.css']
})
export class FindflightComponent implements OnInit {

  constructor(public svc:ListFligthService, private raout:Router) { }

  ngOnInit(): void {
  }
@Input() flight:Flight

@Input()  numepassengers = ''



select(fligth){
  console.log(this.flight);

  let plase = parseInt(this.flight.numFreeplaces) - parseInt(this.numepassengers)

  if(plase >= 0){

    this.svc.flightSelected = fligth

    this.flight.numFreeplaces = plase.toString()

    console.log(this.flight.numFreeplaces);

    this.raout.navigate(['/singup']) 
    
  }
  else{
    document.querySelector('.place').innerHTML =`only ${this.flight.numFreeplaces} places left`
  }
  
  
}


}


