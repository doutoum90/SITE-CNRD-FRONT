import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import {
  Article,
  Categories,
  Membre,
  Users,
} from "../../articles/model/article.model";

@Component({
  selector: "app-list-member",
  templateUrl: "./list-member.component.html",
  styleUrls: ["./list-member.component.scss"],
  animations: egretAnimations,
})
export class ListMemberComponent implements OnInit {
  members$: Observable<Membre[]>;

  constructor(
    private readonly router: Router,
    private readonly jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    // const user = this.jwtAuth.getUser();
    // console.log(user);
    this.members$ = this.articleService.getAllMembers();
  }

  detail(data: Article) {
    this.router.navigate(["/dashboard/members/edit", data.id]);
  }

  deleteItem(data: Article) {
    console.log(data);
  }

  archiver(data: Categories) {
    if (!data.isArchived) {
      this.articleService
        .archiverUsers(data.id, !data.isArchived)
        .subscribe((r) => {
          this.members$ = this.articleService.getAllMembers();
          this.egretLoader.open(
            `Utilisateur ${r.nom} ${r.prenom} archivé avec succés`,
            {
              width: "320px",
            }
          );
          setTimeout(() => {
            this.egretLoader.close();
          }, 2000);
        });
    }
  }

  activerDesactiver(data: Users) {
    this.articleService
      .activerDesactiverUser(data.id, !data.isActive)
      .subscribe((r) => {
        this.members$ = this.articleService.getAllMembers();
        this.egretLoader.open(
          `Utilisateur ${r.nom} ${r.prenom} ${
            r.isActive ? "activé" : "desactivé"
          } avec succés`,
          {
            width: "320px",
          }
        );
        setTimeout(() => {
          this.egretLoader.close();
        }, 2000);
      });
  }
}
