import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  

  constructor(public svc: ListFligthService, private router: Router, public httpservis: HttpService) { }

  ngOnInit(): void {
  }

  @ViewChild("linksingup") singup: ElementRef

  signin = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required, Validators.minLength(4),])
  })


  singin() {
    // console.log(this.signin.value);

    this.httpservis.getorder(this.signin.value).subscribe((res) => {
      console.log("res",res);
      if (res!=0) {
        this.svc.order = res[0]
        console.log(this.svc.order);
        this.router.navigate(['/details-passenger'])
      } 
      else{
        this.singup.nativeElement.hidden = false
      } 
    })
  }
}
