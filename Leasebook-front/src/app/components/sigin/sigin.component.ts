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

  register(username: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement): boolean {
    this.userService.register(
      username.value, email.value, password.value).subscribe(
        res => {
          this.router.navigate(['/books']);
        }, err => console.log(err)
      )
    return false;
  }

}
