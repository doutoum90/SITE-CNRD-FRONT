import { Routes } from "@angular/router";
import { config } from "config";
import { ArticleCatComponent } from "./article-cat/article-cat.component";
import { ArticleViewComponent } from "./article-view/article-view.component";

export const ArticleRoutes: Routes = [
  {
    path: "categories/:id",
    component: ArticleCatComponent,
    data: {
      title: "Articles par categories",
      breadcrumb: "Articles par categories",
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
