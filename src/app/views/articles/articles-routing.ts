import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserRoleGuard } from "app/shared/guards/user-role.guard";
import { config } from "config";
import { AddArticleComponent } from "./add-article/add-article.component";
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
    canActivate: [UserRoleGuard],
    data: {
      title: "Page d'acceuil",
      breadcrumb: "Page d'acceuil",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "add",
    component: AddArticleComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Ajout Article",
      breadcrumb: "Ajout Article",
      roles: config.authRoles.sa,
    },
  },
  {
    path: ":id",
    component: ArticleViewComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Détail Article",
      breadcrumb: "Détail Article",
      roles: config.authRoles.sa,
    },
  },
  {
    path: ":id/archived",
    component: ArticleViewComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Détail Article",
      breadcrumb: "Détail Article",
      roles: config.authRoles.sa,
    },
  },
];
