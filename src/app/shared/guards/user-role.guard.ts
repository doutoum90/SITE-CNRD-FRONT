import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { JwtAuthService } from "../services/auth/jwt-auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private readonly jwtAuth: JwtAuthService,
    private snack: MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.jwtAuth.getUser();
    if (user && route?.data?.roles?.includes(user?.roles)) {
      return true;
    } else {
      this.snack.open("You do not have access to this page!", "OK");
      return false;
    }
  }
}
