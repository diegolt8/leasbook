import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service'


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {

  }

  register(username: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement,
    address: HTMLInputElement, nit: HTMLInputElement,
    city: HTMLInputElement, phone: HTMLInputElement, birth_date: HTMLInputElement): boolean {
    this.userService.register(
      username.value, email.value, password.value, address.value, nit.value, city.value, phone.value, 
      birth_date.valueAsDate).subscribe(
        res => {
          this.router.navigate(['/books']);
        }, err => console.log(err)
      )
    return false;
  }

}
