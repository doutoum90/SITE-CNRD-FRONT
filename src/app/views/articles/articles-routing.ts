import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { config } from "config";
import { ArticleViewComponent } from "./article-view/article-view.component";

export const ArticleRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Page d'acceuil",
      breadcrumb: "Page d'acceuil",
      roles: config.authRoles.sa,
    },
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
