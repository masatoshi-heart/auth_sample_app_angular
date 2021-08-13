import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthMetaService } from '../service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {

  constructor(private authMetaService: AuthMetaService, private router: Router){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authMetaService.isAdmin.subscribe(result => {return result})){
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }

}
