import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { of, BehaviorSubject, throwError } from "rxjs";
import { environment } from "environments/environment";
import { Users } from "app/views/articles/model/article.model";

interface Profile {
  user: Users;
  access_token: string;
}

@Injectable({
  providedIn: "root",
})
export class JwtAuthService {
  token;
  isAuthenticated: Boolean;
  user: Partial<Users> = {};
  user$ = new BehaviorSubject<Partial<Users>>(this.user);
  signingIn: Boolean;
  return: string;
  JWT_TOKEN = "JWT_TOKEN";
  User = "USER";

  constructor(
    private ls: LocalStoreService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (params) => (this.return = params["return"] || "/")
    );
  }

  public signin(username, password) {
    this.signingIn = true;
    return this.http
      .post(`${environment.apiURL}/login`, { username, password })
      .pipe(
        map((res: Profile) => {
          this.setUserAndToken(res.access_token, res.user, !!res);
          this.signingIn = false;
          return res;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public checkTokenIsValid() {
    return this.http.get(`${environment.apiURL}/users/profile`).pipe(
      map((profile: Users) => {
        this.setUserAndToken(this.getJwtToken(), profile, true, false);
        return profile;
      }),
      catchError((error) => {
        this.signout();
        return of(error);
      })
    );
  }

  public signout() {
    this.setUserAndToken(null, null, false);
    this.router.navigateByUrl("sessions/signin");
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return this.ls.getItem(this.JWT_TOKEN);
  }
  getUser() {
    return this.ls.getItem(this.User);
  }

  setUserAndToken(
    token: String,
    user: Users,
    isAuthenticated: Boolean,
    rewrite = true
  ) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    if (rewrite) {
      this.user = user;
      this.user$.next(user);
      this.ls.setItem(this.JWT_TOKEN, token);
      this.ls.setItem(this.User, user);
    }
  }
}
