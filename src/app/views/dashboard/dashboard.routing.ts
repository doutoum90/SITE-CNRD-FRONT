import { Routes } from "@angular/router";

import { AnalyticsComponent } from "./analytics/analytics.component";
import { DashboardDarkComponent } from "./dashboard-dark/dashboard-dark.component";
import { CryptocurrencyComponent } from "./cryptocurrency/cryptocurrency.component";
import { DefaultDashboardComponent } from "./default-dashboard/default-dashboard.component";
import { UserRoleGuard } from "app/shared/guards/user-role.guard";
import { LearningManagementComponent } from "./learning-management/learning-management.component";
import { AnalyticsAltComponent } from "./analytics-alt/analytics-alt.component";
import { config } from "config";
import { AddArticleComponent } from "./add-article/add-article.component";
import { EditArticleComponent } from "./edit-article/edit-article.component";
import { ListArticleComponent } from "./list-article/list-article.component";

export const DashboardRoutes: Routes = [
  {
    path: "articles",
    component: ListArticleComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Liste des articles",
      breadcrumb: "Liste des articles",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "articles/add",
    component: AddArticleComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Ajout Article",
      breadcrumb: "Ajout Article",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "articles/edit/:id",
    component: EditArticleComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Modification Article",
      breadcrumb: "Modification Article",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "default",
    component: DefaultDashboardComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Default",
      breadcrumb: "Default",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "learning-management",
    component: LearningManagementComponent,
    data: { title: "Learning management", breadcrumb: "LEARNING" },
  },
  {
    path: "analytics",
    component: AnalyticsComponent,
    data: { title: "Analytics", breadcrumb: "Analytics" },
  },
  {
    path: "analytics-alt",
    component: AnalyticsAltComponent,
    data: {
      title: "Analytics Alternative",
      breadcrumb: "Analytics Alternative",
    },
  },
  {
    path: "crypto",
    component: CryptocurrencyComponent,
    data: { title: "Cryptocurrency", breadcrumb: "Cryptocurrency" },
  },
  {
    path: "dark",
    component: DashboardDarkComponent,
    data: { title: "Dark Cards", breadcrumb: "Dark Cards" },
  },
];
