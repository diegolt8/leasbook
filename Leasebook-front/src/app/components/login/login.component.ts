import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
  }

  login(email: HTMLInputElement, password: HTMLInputElement): boolean {
    this.userService.login(email.value, password.value).subscribe(
        res => {
          localStorage.setItem('TOKEN_USER', JSON.stringify(res) );
          this.router.navigate(['/books']);
        }, err => console.log(err)
      )
    return false;
  }

}
