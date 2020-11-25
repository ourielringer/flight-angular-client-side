import { Injectable } from '@angular/core';
import { User,} from '../models/models';
import { Flight } from '../models/models';
import { SingupComponent } from '../coms/singup/singup.component';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListFligthService {

  constructor(private http: HttpClient) { }


  listfligth = [new Flight('1a2b3c', "Afghanistan", "2", 'Albania', '7', '2020-11-01', '200$', 'airfrance', '300'),
  new Flight('4d5e6f', "Afghanistan", "5", 'Algeria', '23:00', '2020-11-01', '1200$', 'chinaff', '200'),
  new Flight('25fg5y', "Afghanistan", "10", 'Algeria', '24:00', '2020-11-01', '1500$', 'chinaff', '4')]

  listuser = [new User('aaaa', 123456789, 'a',123)];

  flightSelected: Flight
  passenger: User

  adults: number = 0
  babys: number = 0
  sumPassaenger: number[] = [];

  sumPassaengerarray() {
    for (let p = 0; p < (this.adults + this.babys); p++) {
      this.sumPassaenger.push(0)
    }
    console.log(this.sumPassaenger);
  }


  getFlight(url, str): Observable<any> {
    // let str1 = `?sharch=${str}`
    return this.http.get(url + str)
  }
}
// this.listperson.push({'name':name, 'emil':emil, 'password':password} )



