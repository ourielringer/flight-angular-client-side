import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListFligthService } from 'src/app/services/list-fligth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(public svc:ListFligthService , private router:Router) { }

  ngOnInit(): void {
  }

  signin = new FormGroup({
    name : new FormControl('', [Validators.required,]),
    password : new FormControl('',  [Validators.required, Validators.minLength(3),])
  })

  // name = new FormControl("",[Validators.required,Validators.min(2)]) 
  // password = new FormControl("",[Validators.required,Validators.min(6)])
  
  singin(){

    console.log( this.signin.value.name);
    
    for (let i = 0; i <  this.svc.listuser.length; i++) {

      if ( this.svc.listuser[i].name == this.signin.value.name &&
          this.svc.listuser[i].password == this.signin.value.password){

          this.svc.passenger = this.svc.listuser[i];
          this.router.navigate(['/details-passenger'])
        }
      else{
        
        document.querySelector('.alert').innerHTML = "does not exist in the userslist <a routerLink ='/singup'>click hear</a>"
      }
    
    }
  }
}
