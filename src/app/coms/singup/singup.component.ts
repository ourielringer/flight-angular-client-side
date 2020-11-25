import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/models';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ListFligthService } from 'src/app/services/list-fligth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(public svcsingup: ListFligthService,
    public svcHttp: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }
  signup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(2)]),
    email: new FormControl("", [Validators.required,]),
    phonenumber: new FormControl("", [Validators.required,]),
    password: new FormControl("", [Validators.required, Validators.min(6)])
  })

  singup() {
    let boolian = true

    // this.svcHttp.singup( this.signup.value).subscribe(res => console.log(res))

    for (let i = 0; i < this.svcsingup.listuser.length; i++) {

      if (this.svcsingup.listuser[i].email == this.signup.value.email &&
        this.svcsingup.listuser[i].password == this.signup.value.password) {
        alert("user is exsist")
        boolian = false
        break
      }
      else {
        continue
      }
    }

    if (boolian) {
      let user = new User(this.signup.value.name, this.signup.value.email, this.signup.value.phonenumber, this.signup.value.password)
      this.svcsingup.listuser.push(user)
      console.log(this.svcsingup.listuser);
      

      this.svcsingup.passenger = user
      console.log(this.svcsingup.passenger);

       this.router.navigate(['/singin'])

    //   console.log(this.svcsingup.listuser);
     }
  }
}
