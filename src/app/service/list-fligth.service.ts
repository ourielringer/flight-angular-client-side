import { Injectable } from '@angular/core';
import { User } from '../models/models';
import { Flight } from '../models/models';
import { SingupComponent } from '../coms/singup/singup.component';

@Injectable({
  providedIn: 'root'
})
export class ListFligthService {
  
  constructor() { }
 

listfligth = [new Flight('1a2b3c',"Afghanistan","2",'Albania','7','20/20/2020','200$','airfrance','300'),
              new Flight('4d5e6f',"Afghanistan","5",'Algeria','23:00','20/20/2020','1200$','chinaff','200'),
              new Flight('25fg5y',"Afghanistan","10",'Algeria','24:00','20/20/2020','1500$','chinaff','4') ]

listuser = [new User('aaaa','a','a')]   

adults:number = 0
babys:number = 0

flightSelected:Flight
passenger:User







}
// this.listperson.push({'name':name, 'emil':emil, 'password':password} )



