import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "../login/login.service";

@Injectable()
export class CanActivateDashboard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.loginService.getOrder;

    if (user) return true;

    this.router.navigate(['/login']);

    return false;
  }
}
