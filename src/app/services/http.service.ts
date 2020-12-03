import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logs } from 'selenium-webdriver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  urlordering = 'http://localhost:3000/ordering'
  urlpassengers = 'http://localhost:3000/passengers'
  urlflight = 'http://localhost:3000/ticket'

  getFlight(url, str): Observable<any> {
    // let str1 = `?sharch=${str}`
    return this.http.get(url + str)
  }

  singup(order) {
    console.log(order);
    console.log(this.urlordering);
    return this.http.post(this.urlordering, order)
  }

  savePassengerDetails(passengerDetails) {
    console.log(passengerDetails);
    return this.http.post(this.urlpassengers, passengerDetails)
  }

  updatenumplase(flightid, numplace) {
    console.log(flightid, '==================');
    return this.http.put(`${this.urlflight}/${flightid}`, { numplaces: numplace })
  }

  getorder(order) {
    console.log(order);
    return this.http.get(this.urlordering +'/findone'+`?username=${order.name}&&password=${order.password}`)
  }

  getpassenger(id){
    return this.http.get(`${this.urlpassengers}/${id}`,)
  }

}
