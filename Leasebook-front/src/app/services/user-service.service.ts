import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string,
    address: string, nit: string, city: string, phone: string, birth_date: Date) {
    const fd = new FormData();
    fd.append('username', username);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('address', address);
    fd.append('nit', nit);
    fd.append('city', city);
    fd.append('phone', phone);
    fd.append('birth_date', birth_date.toString());
    return this.http.post(this.URI + '/signup', fd);
  }
}
