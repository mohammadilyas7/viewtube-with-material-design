import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  constructor() { }
  redirectUrl: string = "";
  isChecked:boolean=false;
  isValid:boolean=false;
  isAccountLogedin:boolean=false;
  isLoggedIn: boolean = false;
  
  isLogedIn() {
    this.isAccountLogedin = true;
  }
  
  login(username: string,pass:string) {
    if (username == 'ilyas78874@gmail.com' && pass=='1234') {
      this.isLoggedIn = true;
      alert('login sucessfull');

    }
    else{
      alert('Invalid author');
    }
  }

}
