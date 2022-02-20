import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AdhererComponent } from "./adherer/adherer.component";
import { ContactComponent } from "./contact/contact.component";
import { DocumentsComponent } from "./documents/documents.component";
import { HomeComponent } from "./home/home.component";
import { MembersComponent } from "./members/members.component";

export const PublicRoutes: Routes = [
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "contact", breadcrumb: "contact" },
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "about", breadcrumb: "about" },
  },
  {
    path: "docs",
    component: DocumentsComponent,
    data: { title: "Documents", breadcrumb: "Documents" },
  },
  {
    path: "adherer",
    component: AdhererComponent,
    data: { title: "Adhesion", breadcrumb: "Adhesion" },
  },
  {
    path: "membres",
    component: MembersComponent,
    data: { title: "Membres du bureau", breadcrumb: "Membres du bureau" },
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Page d'acceuil",
      breadcrumb: "Page d'acceuil",
    },
  },
];
