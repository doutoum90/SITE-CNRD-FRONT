import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
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
import { AnalyticsComponent } from "./analytics/analytics.component";
import { DashboardDarkComponent } from "./dashboard-dark/dashboard-dark.component";
import { CryptocurrencyComponent } from "./cryptocurrency/cryptocurrency.component";
import { DefaultDashboardComponent } from "./default-dashboard/default-dashboard.component";
import { LearningManagementComponent } from "./learning-management/learning-management.component";
import { AnalyticsAltComponent } from "./analytics-alt/analytics-alt.component";
import { TranslateModule } from "@ngx-translate/core";
import { AddArticleComponent } from "./add-article/add-article.component";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FileUploadModule } from "ng2-file-upload";
import { EditArticleComponent } from "./edit-article/edit-article.component";
import { ListArticleComponent } from "./list-article/list-article.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { QuillModule } from "ngx-quill";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { AddCategoryomponent } from "./add-category/add-category.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";

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
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartsModule,
    TranslateModule,
    QuillModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts,
    }),
    NgApexchartsModule,
    NgxDatatableModule,
    SharedPipesModule,
    MatStepperModule,
    MatPaginatorModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [
    ListArticleComponent,
    AddArticleComponent,
    EditArticleComponent,

    ListCategoryComponent,
    AddCategoryomponent,
    EditCategoryComponent,

    AnalyticsComponent,
    DashboardDarkComponent,
    CryptocurrencyComponent,
    DefaultDashboardComponent,
    LearningManagementComponent,
    AnalyticsAltComponent,
  ],
  exports: [],
})
export class DashboardModule {}
