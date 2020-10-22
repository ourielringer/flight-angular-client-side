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

  constructor(public svcsingin:ListFligthService , private router:Router) { }

  ngOnInit(): void {
  }

  name = new FormControl("",[Validators.required,Validators.min(2)])
  password = new FormControl("",[Validators.required,Validators.min(6)])
  
  singin(){
    for (let i = 0; i <  this.svcsingin.listuser.length; i++) {

      if ( this.svcsingin.listuser[i].name == this.name.value &&
          this.svcsingin.listuser[i].password == this.password.value){
          this.router.navigate(['/details-passenger'])
        }
      else{
        document.querySelector('.alert').innerHTML = "does not exist in the userslist <a routerLink ='/singup'>click hear</a>"
      }
    
    }
  }
}
