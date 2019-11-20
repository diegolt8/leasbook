import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  URI = 'http://localhost:3000/api/auth'

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string) {
    const fd = new FormData();
    fd.append('username', username);
    fd.append('email', email);
    fd.append('password', password);
    return this.http.post(this.URI + '/signup', fd);
  }
}
