import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { FrontLayoutComponent } from "./shared/components/layouts/front-layout/front-layout.component";
import { AuthGuard } from "./shared/guards/auth.guard";

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
        data: { title: "Session" },
      },
    ],
  },
  {
    path: "articles",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: FrontLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/public/public.module").then((m) => m.PublicModule),
        data: { url: "/", title: "Public", breadcrumb: "Public" },
      },
      {
        // vu
        path: "articles",
        loadChildren: () =>
          import("./views/articles/articles.module").then(
            (m) => m.ArticlesModule
          ),
        data: { url: "/", title: "Articles", breadcrumb: "Articles" },
      },
      {
        path: "search",
        loadChildren: () =>
          import("./views/search-view/search-view.module").then(
            (m) => m.SearchViewModule
          ),
      },
    ],
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        // vu
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
        data: { title: "Dashboard", breadcrumb: "DASHBOARD" },
      },
      {
        // vu
        path: "profile",
        loadChildren: () =>
          import("./views/profile/profile.module").then((m) => m.ProfileModule),
        data: { title: "Profile", breadcrumb: "PROFILE" },
      },
    ],
  },
  {
    path: "**",
    redirectTo: "sessions/404",
  },
];
