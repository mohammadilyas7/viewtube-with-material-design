import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private validate:ValidateService, private route:Router) {}

  register(form:NgForm) {
    console.log(form.value);
    this.validate.isChecked = form.value.check;
    this.route.navigate(['account/login'])
  }

  ngOnInit(): void {
  }

}
