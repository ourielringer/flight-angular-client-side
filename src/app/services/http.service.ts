import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  urlordering = 'http://localhost:3000/ordering'
  urlpassengers = 'http://localhost:3000/passengers'
  urlflight = 'http://localhost:3000/ticket'
  urlmanager = 'http://localhost:3000/manager'
  urlreservation = 'http://localhost:3000/reservation'


  getFlight(url, str): Observable<any> {
    // let str1 = `?sharch=${str}`
    return this.http.get(url + str)
  }

  post(url: string, obj: object) {
    console.log(obj);
    return this.http.post(url, obj)
  }

  savePassengerDetails(passengerDetails, header) {
    console.log(passengerDetails);
    return this.http.post(this.urlpassengers, passengerDetails, header)
  }

  updatenumplase(flightid, numplace) {
    console.log(flightid, '==================');
    return this.http.put(`${this.urlflight}/${flightid}`, { numplaces: numplace })
  }

  get(url: string) {
    console.log(url);
    return this.http.get(url)
  }

  get1(url: string) {
    console.log(url);
    return of(this.http.get(url))
  }


  getadmin(admin) {
    console.log(admin);
    return this.http.get(this.urlordering + '/permition' + `?username=${admin[0].name}&&password=${admin[0].password}&&rolse=${admin[0].rolse}`)
  }

  getpassenger(id) {
    return this.http.get(`${this.urlpassengers}/${id}`,)
  }

  getmanager(manager) {
    return this.http.get(this.urlordering + '/manager' + `?username=${manager.name}&&password=${manager.password}`)
  }

}