import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private validate:ValidateService, private route:Router) { }

  ngOnInit(): void {
  }

  logIn(form:NgForm) {
    console.log(form.value);
    this.validate.isLogedIn();
    this.route.navigate(['studio/upload']);
  }


  log(securityCode: string,pass:string) {
    this.validate.login(securityCode,pass);
    this.route.navigate([this.validate.redirectUrl]);
  }
}
