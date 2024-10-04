import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateService } from './validate.service';

@Injectable({
  providedIn: 'root'
})
export class LiveGuard implements CanActivate {
  constructor(private validate:ValidateService) {}

  canActivate() {
    if(this.validate.isChecked)
    {
      return true;
    }
    else
      return false;
  }
  
}
