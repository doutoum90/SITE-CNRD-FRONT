import { Routes } from "@angular/router";
import { config } from "config";
import { ArticleViewComponent } from "./article-view/article-view.component";

export const ArticleRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: ":id",
    component: ArticleViewComponent,
    data: {
      title: "Détail Article",
      breadcrumb: "Détail Article",
      roles: config.authRoles.sa,
    },
  },
  {
    path: ":id/archived",
    component: ArticleViewComponent,
    data: {
      title: "Détail Article",
      breadcrumb: "Détail Article",
      roles: config.authRoles.sa,
    },
  },
];
