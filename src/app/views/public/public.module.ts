import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { AboutComponent } from "./about/about.component";
import { AdhererComponent } from "./adherer/adherer.component";
import { ContactComponent } from "./contact/contact.component";
import { DocumentsComponent } from "./documents/documents.component";
import { HomeComponent } from "./home/home.component";
import { MembersComponent } from "./members/members.component";
import { SharedComponentsModule } from "app/shared/components/shared-components.module";
import { PublicRoutes } from "./public-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatStepperModule } from "@angular/material/stepper";
import { FileUploadModule } from "ng2-file-upload";
import { NgxPaginationModule } from "ngx-pagination";
import { TranslateModule } from "@ngx-translate/core";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ResultPageComponent } from "./result-page/result-page.component";

@NgModule({
  declarations: [
    AboutComponent,
    AdhererComponent,
    ContactComponent,
    DocumentsComponent,
    HomeComponent,
    MembersComponent,
    ResultPageComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,

    MatCardModule,

    MatButtonModule,

    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    SharedComponentsModule,

    HttpClientModule,
    MatDividerModule,
    NgxPaginationModule,
    MatGridListModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCheckboxModule,
    FileUploadModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    RouterModule.forChild(PublicRoutes),
    NgxDatatableModule,
    MatPaginatorModule,
  ],
})
export class PublicModule {}
