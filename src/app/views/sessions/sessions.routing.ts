import { Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SigninComponent } from "./signin/signin.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./error/error.component";

export const SessionsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "signin",
        component: SigninComponent,
        data: { title: "Signin" },
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        data: { title: "Forgot password" },
      },
      {
        path: "404",
        component: NotFoundComponent,
        data: { title: "Not Found" },
      },
      {
        path: "error",
        component: ErrorComponent,
        data: { title: "Error" },
      },
    ],
  },
];
