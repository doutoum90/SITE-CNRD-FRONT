import { Routes } from "@angular/router";

import { UserRoleGuard } from "app/shared/guards/user-role.guard";

import { config } from "config";
import { AddArticleComponent } from "./add-article/add-article.component";
import { ListArticleComponent } from "./list-article/list-article.component";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { ListUsersComponent } from "./list-user/list-user.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { AddMembreComponent } from "./add-membre/add-membre.component";
import { ListMemberComponent } from "./list-member/list-member.component";
import { ListAdherantComponent } from "./list-adherant/list-adherant.component";
import { EditAdherantComponent } from "./edit-adherant/edit-adherant.component";
import { ProfileComponent } from "./profile/profile.component";

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
    path: "members",
    component: ListMemberComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Liste des membres",
      breadcrumb: "Liste des membres",
      roles: config.authRoles.sa,
    },
  },

  {
    path: "adherants",
    component: ListAdherantComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Liste des adherants",
      breadcrumb: "Liste des adherants",
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
    path: "categories/add",
    component: AddCategoryComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Ajout Category",
      breadcrumb: "Ajout Category",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "users/add",
    component: AddUserComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Ajout utilisateur",
      breadcrumb: "Ajout utilisateur",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "members/add",
    component: AddMembreComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Ajout membre",
      breadcrumb: "Ajout membre",
      roles: config.authRoles.sa,
    },
  },

  {
    path: "articles/edit/:id",
    component: AddArticleComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Modification Article",
      breadcrumb: "Modification Article",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "categories/edit/:id",
    component: AddCategoryComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Modification de la category",
      breadcrumb: "Modification de la category",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "users/edit/:id",
    component: AddUserComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Modification utilisateur",
      breadcrumb: "Modification utilisateur",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "members/edit/:id",
    component: AddMembreComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Modification d'un membre",
      breadcrumb: "Modification d'un membre",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "adherants/edit/:id",
    component: EditAdherantComponent,
    canActivate: [UserRoleGuard],
    data: {
      title: "Modification adherant",
      breadcrumb: "Modification adherant",
      roles: config.authRoles.sa,
    },
  },
  {
    path: "profile/settings",
    component: ProfileComponent,
    data: { title: "Settings", breadcrumb: "SETTINGS" },
  },
];
