import { Routes } from "@angular/router";

import { UserRoleGuard } from "app/shared/guards/user-role.guard";

import { config } from "config";
import { AddArticleComponent } from "./add-article/add-article.component";
import { EditArticleComponent } from "./edit-article/edit-article.component";
import { ListArticleComponent } from "./list-article/list-article.component";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { AddCategoryomponent } from "./add-category/add-category.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";
import { ListUsersComponent } from "./list-user/list-user.component";

export const DashboardRoutes: Routes = [
  {
    path: "",
    redirectTo: "articles",
    pathMatch: "full",
  },
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
    path: "categories",
    component: ListCategoryComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Liste des categories",
      breadcrumb: "Liste des categories",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "users",
    component: ListUsersComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Liste des users",
      breadcrumb: "Liste des users",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "categories/add",
    component: AddCategoryomponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Ajout Category",
      breadcrumb: "Ajout Category",
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
    path: "categories/edit/:id",
    component: EditCategoryComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Modification de la category",
      breadcrumb: "Modification de la category",
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
];
