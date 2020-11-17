import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListFligthService } from 'src/app/service/list-fligth.service';
import { Router } from '@angular/router';


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
    name : new FormControl('', [Validators.required, Validators.minLength(4),]),
    password : new FormControl('', [])
  })

  // name = new FormControl("",[Validators.required,Validators.min(2)]) 
  // password = new FormControl("",[Validators.required,Validators.min(6)])
  
  singin(){
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
