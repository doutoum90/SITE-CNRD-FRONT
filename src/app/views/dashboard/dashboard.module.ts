import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import * as echarts from "echarts";

import { NgApexchartsModule } from "ng-apexcharts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";

import { DashboardRoutes } from "./dashboard.routing";
import { TranslateModule } from "@ngx-translate/core";
import { AddArticleComponent } from "./add-article/add-article.component";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FileUploadModule } from "ng2-file-upload";
import { ListArticleComponent } from "./list-article/list-article.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { QuillModule } from "ngx-quill";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";
import { ListUsersComponent } from "./list-user/list-user.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { AddMembreComponent } from "./add-membre/add-membre.component";
import { EditMemberComponent } from "./edit-membre/edit-membre.component";
import { ListMemberComponent } from "./list-member/list-member.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ListAdherantComponent } from "./list-adherant/list-adherant.component";
import { EditAdherantComponent } from "./edit-adherant/edit-adherant.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { SharedComponentsModule } from "app/shared/components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    FileUploadModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartsModule,
    TranslateModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    QuillModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts,
    }),
    NgApexchartsModule,
    NgxDatatableModule,
    SharedPipesModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    SharedComponentsModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [
    ListArticleComponent,
    AddArticleComponent,

    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,

    ListUsersComponent,
    AddUserComponent,
    EditUserComponent,

    ListMemberComponent,
    AddMembreComponent,
    EditMemberComponent,

    ListAdherantComponent,
    EditAdherantComponent,

  ],
  exports: [],
})
export class DashboardModule {}
