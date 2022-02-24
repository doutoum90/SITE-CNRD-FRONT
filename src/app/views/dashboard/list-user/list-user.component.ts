import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories, Users } from "../../articles/model/article.model";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.scss"],
  animations: egretAnimations,
})
export class ListUsersComponent implements OnInit {
  users$: Observable<Users[]>;

  constructor(
    private readonly router: Router,
    private readonly jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,
    private readonly appConfirmService: AppConfirmService
  ) {}

  ngOnInit() {
    this.users$ = this.articleService.getAllUsers();
  }

  detail(data: Users) {
    this.router.navigate(["/dashboard/users/edit", data._id]);
  }

  deleteItem(data: Users) {
    this.appConfirmService
      .confirm({
        title: "Suppression",
        message: "Etes-vous sur de vouloir supprimer?",
      })
      .subscribe((v) => {
        if (v) {
          this.articleService.deleteUser(data._id).subscribe((r) => {
            this.users$ = this.articleService.getAllUsers();
            this.egretLoader.open("Utilisateur supprimé avec succés", {
              width: "320px",
            });
            setTimeout(() => {
              this.egretLoader.close();
            }, 2000);
          });
        }
      });
  }

  archiver(data: Categories) {
    if (!data.isArchived) {
      this.articleService
        .archiverUsers(data._id, !data.isArchived)
        .subscribe((r) => {
          this.users$ = this.articleService.getAllUsers();
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
      .activerDesactiverUser(data._id, !data.isActive)
      .subscribe((r) => {
        this.users$ = this.articleService.getAllUsers();
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
  paginationCallBack(event) {
    console.log(event);
  }
}
