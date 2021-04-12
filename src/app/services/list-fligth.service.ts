import { Injectable } from '@angular/core';
import { Flight, Passenger } from '../models/models';
import { SingupComponent } from '../coms/singup/singup.component';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListFligthService {

  constructor(private http: HttpClient) { }


  goAndBack: boolean = false

  flightSelected: Flight[] = []
  listpassenger: Passenger[] = []
  passenger
  SeatingAvailable: number;
  order
  token: string

  adults: number = 0
  babys: number = 0
  sumPassaenger: number[] = [];

  sumPassaengerarray() {
    this.sumPassaenger = []
    for (let p = 0; p < (this.adults + this.babys); p++) {
      this.sumPassaenger.push(0)
    }
    console.log(this.sumPassaenger);
  }

}



