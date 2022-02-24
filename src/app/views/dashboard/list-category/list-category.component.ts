import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories } from "../../articles/model/article.model";

@Component({
  selector: "app-list-category",
  templateUrl: "./list-category.component.html",
  styleUrls: ["./list-category.component.scss"],
  animations: egretAnimations,
})
export class ListCategoryComponent implements OnInit {
  categories$: Observable<Categories[]>;

  constructor(
    private readonly router: Router,
    private readonly jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,

    private readonly appConfirmService: AppConfirmService
  ) {}

  ngOnInit() {
    this.categories$ = this.articleService.getAllCategories();
  }

  detail(data: Categories) {
    this.router.navigate(["/dashboard/categories/edit", data._id]);
  }

  deleteItem(data: Categories) {
    this.appConfirmService
      .confirm({
        title: "Suppression",
        message: "Etes-vous sur de vouloir supprimer?",
      })
      .subscribe((v) => {
        if (v) {
          this.articleService.deleteCategories(data._id).subscribe((r) => {
            this.categories$ = this.articleService.getAllCategories();
            this.egretLoader.open("Categorie supprimé avec succés", {
              width: "320px",
            });
            setTimeout(() => {
              this.egretLoader.close();
            }, 2000);
          });
        }
      });
  }

  archiverCategory(data: Categories) {
    this.articleService
      .archiverCategory(data._id, !data.isArchived)
      .subscribe((r) => {
        this.categories$ = this.articleService.getAllCategories();
        this.egretLoader.open(`Categorie ${r.libelles} archivés avec succés`, {
          width: "320px",
        });
        setTimeout(() => {
          this.egretLoader.close();
        }, 2000);
      });
  }
  paginationCallBack(event) {
    console.log(event);
  }
}
