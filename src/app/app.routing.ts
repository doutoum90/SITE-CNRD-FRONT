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
      {
        // vu
        path: "others",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
        data: { title: "Others", breadcrumb: "OTHERS" },
      },
      {
        //vu
        path: "inbox",
        loadChildren: () =>
          import("./views/app-inbox/app-inbox.module").then(
            (m) => m.AppInboxModule
          ),
        data: { title: "Inbox", breadcrumb: "INBOX" },
      },
      {
        // vu
        path: "chat",
        loadChildren: () =>
          import("./views/app-chats/app-chats.module").then(
            (m) => m.AppChatsModule
          ),
        data: { title: "Chat", breadcrumb: "CHAT" },
      },
      {
        //vu
        path: "shop",
        loadChildren: () =>
          import("./views/shop/shop.module").then((m) => m.ShopModule),
        data: { title: "Shop", breadcrumb: "SHOP" },
      },
      {
        path: "search",
        loadChildren: () =>
          import("./views/search-view/search-view.module").then(
            (m) => m.SearchViewModule
          ),
      },
      {
        // vu
        path: "invoice",
        loadChildren: () =>
          import("./views/invoice/invoice.module").then((m) => m.InvoiceModule),
      },
      {
        // vu
        path: "todo",
        loadChildren: () =>
          import("./views/todo/todo.module").then((m) => m.TodoModule),
      },
      {
        // vu
        path: "page-layouts",
        loadChildren: () =>
          import("./views/page-layouts/page-layouts.module").then(
            (m) => m.PageLayoutsModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "sessions/404",
  },
];
