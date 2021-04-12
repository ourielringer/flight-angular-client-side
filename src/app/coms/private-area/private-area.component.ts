import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {
  
  @ViewChild("divpermition") divpermition: ElementRef
  pasangers: any[] = []
  flightgo: any
  flightback
  addpasenger = false
  div
  searchByNumFlight: boolean = false;
  numFlight: string

  constructor(private httpService: HttpService, public svc: ListFligthService, private raout: Router) { 
  }

  details: FormGroup
  order

  ngOnInit(): void {
    this.div = document.getElementById('mydialog')
    this.div.showModal()
    this.details = new FormGroup({
      arrayDetails: new FormArray([])
    })
    this.create()
  }

  deletall() {
    confirm("האם אתה בטוח ?")
    this.pasangers = [];
    this.flightgo = ''
    this.flightback = ''
    this.raout.navigate(['/search'])
  }

  permition = new FormGroup({
    name: new FormControl(""),
    password: new FormControl(''),
  })

  create() {

    console.log(this.pasangers);
    console.log(this.details.controls.arrayDetails);

    for (let i = 0; i < this.pasangers.length; i++) {
      (this.details.get('arrayDetails') as FormArray).push(
        new FormGroup({
          firstname: new FormControl('', [Validators.required]),
          lastname: new FormControl(''),
          id: new FormControl(''),
          paspord: new FormControl(''),
          numpaspord: new FormControl(''),
          expirpaspord: new FormControl(''),
        })
      );
    }

  }

  detail = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    id: new FormControl(''),
    paspord: new FormControl(''),
    numpaspord: new FormControl(''),
    expirpaspord: new FormControl(''),
  })

  add() {
    this.addpasenger = true
  }

  detailnewpasenger() {
    this.pasangers.push(this.detail.value)
    // console.log(this.pasangers);
    this.addpasenger = false;
  }

  privatArea() {
    console.log(this.permition.value.name);

    this.httpService.get(this.httpService.urlordering + '/findone' + `?username=${this.permition.value.name}&&password=${this.permition.value.password}`).subscribe(res => {
      // this.urlordering +'/findone'+`?username=${order.name}&&password=${order.password}`
      console.log(res);
      if (res['message'] != "Http Exception") {
        this.order = res[0];
        this.div.close('cancelling');
        // this.allpasengers.nativeElement.hidden = false
      } else {
        console.log("ddddddddddd");
        this.divpermition.nativeElement.innerHTML = "אחד או יותר מהנתונים לא נכונים\nנסה שנית"
      }
    })
  }
  // this.httpService.getpassenger(res[0].id).subscribe((r) => {
  //   console.log(r);
  //   console.log(r[8].idflightgo);

  //   // this.pasangers.push(...r)
  //   console.log(this.pasangers);

  //   this.httpService.getFlight('http://localhost:3000/ticket', `/${r[0].idflightgo}`).subscribe(res => {
  //     console.log(res)
  //     this.flightgo = res
  //     console.log(this.flightgo);

  //     this.httpService.getFlight('http://localhost:3000/ticket', `/${r[0].idflightback}`).subscribe((res) => {
  //       this.flightback = res
  //       console.log(res);
  //     })
  //   })
  // })

  delet(pasenger) {
    console.log(pasenger.id);
    console.log(this.pasangers);
    for (let i = 0; i < this.pasangers.length; i++) {

      if (this.pasangers[i].id == pasenger.id) {
        confirm("האם אתה בטוח ?")
        this.pasangers.splice(i, 1)
        console.log(this.pasangers);

        break
      }
    }
  }

  allOrders() {
    this.httpService.get(this.httpService.urlreservation + `/${this.order.id}`).subscribe(res => console.log(res));

  }
  orderByNumFlight() {

  }
  openSearchByNumFlight() {
    this.searchByNumFlight = true
  }


}
