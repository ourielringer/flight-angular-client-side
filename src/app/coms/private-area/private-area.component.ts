import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { ListFligthService } from 'src/app/services/list-fligth.service';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {

  pasangers: any[] = []
  flightgo
  flightback

  addpasenger = false


  // @ViewChild("allpasenger") allpasengers: ElementRef
  div

  constructor(private httpService: HttpService, public svc: ListFligthService) { }


  details: FormGroup


  ngOnInit(): void {
    this.div = document.getElementById('mydialog')
    this.div.showModal()

    this.details = new FormGroup({
      arrayDetails: new FormArray([])
    })
    this.create()
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
    console.log(this.pasangers);
    this.addpasenger = false

  }


  privatArea() {
    console.log(this.permition);

    console.log('aaaaaa');

    this.httpService.getorder(this.permition.value).subscribe(res => {
      console.log(res)
      if (res) {
        this.div.close('cancelling');
        // this.allpasengers.nativeElement.hidden = false
        console.log(res[0].id);

        this.httpService.getpassenger(res[0].id).subscribe((r) => {
          console.log(r);
          this.pasangers.push(...r)
          console.log(this.pasangers);

          this.httpService.getFlight('http://localhost:3000/ticket', `/${r[0].idflightgo}`).subscribe(res => {
            console.log(res)
            this.flightgo = res
            console.log(this.flightgo);


            this.httpService.getFlight('http://localhost:3000/ticket', `/${r[0].idflightback}`).subscribe((res) => {
              this.flightback = res
              console.log(res);
            })
          }
          )
        })
      }
    })
  }
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
}
