import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListFligthService } from 'src/app/service/list-fligth.service';
import { User } from 'src/app/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(public svcsingup:ListFligthService, private router:Router) { }

  ngOnInit(): void {
  }

  name = new FormControl('',[Validators.required,Validators.min(2)])
  emil = new FormControl("",[Validators.required,Validators.email])
  password = new FormControl("",[Validators.required,Validators.min(6)])
  

  singup(){
    let boolian =true
    
    for (let i = 0; i <  this.svcsingup.listuser.length; i++) {

      if ( this.svcsingup.listuser[i].emil == this.emil.value &&
        this.svcsingup.listuser[i].password == this.password.value) {

          alert("user is exsist")
          boolian =false
          break
      }

      else{
        continue
      }

    }
    if (boolian) {
      let user = new User(this.name.value, this.emil.value, this.password.value)

      this.svcsingup.listuser.push(user)

      this.svcsingup.passenger = user
      console.log( this.svcsingup.passenger);
      

      this.router.navigate(['/singin'])
      

      console.log(this.svcsingup.listuser); 
     
  }
  
 }










}
