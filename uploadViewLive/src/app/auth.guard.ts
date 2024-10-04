import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateService } from './validate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private validate:ValidateService, private route:Router) {

  }

  // canActivate(){
  //   if(this.validate.isAccountLogedin)
  //   {
  //     return true;
  //   }
  //   else
  //   {
  //     this.route.navigate(['account/login']);
  //     return false;
  //   }
  // }
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(state.url);
  }
  checkLogin(url: string) {
    if (this.validate.isLoggedIn) 
      return this.validate.isLoggedIn;
    this.validate.redirectUrl = url;
    return this.route.parseUrl('/account');
  }

}
