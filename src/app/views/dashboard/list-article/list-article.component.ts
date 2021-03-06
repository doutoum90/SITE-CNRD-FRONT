import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { AppConfirmService } from "app/shared/services/app-confirm/app-confirm.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import {
  Article,
  ArticlePagine,
  Pagination,
} from "../../articles/model/article.model";

@Component({
  selector: "app-list-article",
  templateUrl: "./list-article.component.html",
  styleUrls: ["./list-article.component.scss"],
  animations: egretAnimations,
})
export class ListArticleComponent implements OnInit {
  articles$: Observable<ArticlePagine>;
  page: Pagination = { count: 0, pageSize: 10, limit: 10, offset: 1 };

  constructor(
    private readonly router: Router,
    private readonly jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,
    private readonly appConfirmService: AppConfirmService
  ) {}

  ngOnInit() {
    this.articles$ = this.articleService.getAllArticles(this.page);
  }

  detail(data: Article) {
    this.router.navigate(["/dashboard/articles/edit", data._id]);
  }

  deleteItem(data: Article) {
    this.appConfirmService
      .confirm({
        title: "Suppression",
        message: "Etes-vous sur de vouloir supprimer?",
      })
      .subscribe((v) => {
        if (v) {
          this.articleService.deleteArticle(data._id).subscribe((r) => {
            this.articles$ = this.articleService.getAllArticles(this.page);
            this.egretLoader.open("Article supprimé avec succés", {
              width: "320px",
            });
            setTimeout(() => {
              this.egretLoader.close();
            }, 2000);
          });
        }
      });
  }

  mettreAlaUne(data: Article) {
    this.articleService
      .mettreAlaUneArticle(data._id, !data.isAlaUne)
      .subscribe((r) => {
        this.articles$ = this.articleService.getAllArticles(this.page);
        this.egretLoader.open(`Article ${r.title} archivé avec succés`, {
          width: "320px",
        });
        setTimeout(() => {
          this.egretLoader.close();
        }, 2000);
      });
  }

  archiverArticle(data: Article) {
    if (!data.isArchived) {
      this.articleService
        .archiverArticle(data._id, !data.isArchived)
        .subscribe((r) => {
          this.articles$ = this.articleService.getAllArticles(this.page);
          this.egretLoader.open(`Article ${r.title} archivé avec succés`, {
            width: "320px",
          });
          setTimeout(() => {
            this.egretLoader.close();
          }, 2000);
        });
    }
  }

  paginationCallBack(event) {
    this.page = event;
    this.articles$ = this.articleService.getAllArticles(this.page);
  }
}
