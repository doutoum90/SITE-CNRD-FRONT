import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "app/shared/shared-material.module";

import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule } from "@ngx-translate/core";

import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

import { SigninComponent } from "./signin/signin.component";
import { SessionsRoutes } from "./sessions.routing";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ErrorComponent } from "./error/error.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    RouterModule.forChild(SessionsRoutes),
  ],
  declarations: [
    ForgotPasswordComponent,
    SigninComponent,
    NotFoundComponent,
    ErrorComponent,
  ],
})
export class SessionsModule {}
