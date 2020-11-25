import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/ordering'

  singup(order) {
    console.log(order);
    
    console.log(this.url );
    return this.http.post(this.url, order)

  }
}
