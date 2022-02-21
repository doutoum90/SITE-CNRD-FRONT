import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Adherant } from "../../articles/model/article.model";

@Component({
  selector: "app-list-adherant",
  templateUrl: "./list-adherant.component.html",
  styleUrls: ["./list-adherant.component.scss"],
  animations: egretAnimations,
})
export class ListAdherantComponent implements OnInit {
  adherants$: Observable<Adherant[]>;

  constructor(
    private readonly router: Router,
    private readonly jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,
    private readonly appConfirmService: AppConfirmService
  ) {}

  ngOnInit() {
    // const user = this.jwtAuth.getUser();
    // console.log(user);
    this.adherants$ = this.articleService.getAllAdherants();
  }

  detail(data: Adherant) {
    this.router.navigate(["/dashboard/adherants/edit", data._id]);
  }

  deleteItem(data: Adherant) {
    this.appConfirmService
      .confirm({
        title: "Suppression",
        message: "Etes-vous sur de vouloir supprimer?",
      })
      .subscribe((v) => {
        if (v) {
          this.articleService.deleteAdherant(data._id).subscribe((r) => {
            this.adherants$ = this.articleService.getAllAdherants();
            this.egretLoader.open("Adherant supprimé avec succés", {
              width: "320px",
            });
            setTimeout(() => {
              this.egretLoader.close();
            }, 2000);
          });
        }
      });
  }
}
