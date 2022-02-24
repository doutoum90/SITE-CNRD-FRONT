import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesService } from "../articles.service";
import { Article, Pagination } from "../model/article.model";

@Component({
  selector: "app-article-cat",
  templateUrl: "./article-cat.component.html",
  styleUrls: ["./article-cat.component.scss"],
})
export class ArticleCatComponent implements OnInit {
  articles$: Observable<Article[]>;
  archivedArticle$: Observable<Article[]>;
  page: Pagination = { count: 0, pageSize: 5, limit: 5, offset: 1 };
  constructor(
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const catId = this._activatedRoute.snapshot.params.id;

    this.articles$ = this.articleService.getArticlesByCat(catId);
    this.archivedArticle$ = this.articleService.getArchivedArticle(this.page);
  }

  showArticle(article: Article) {
    if (article.isArchived) {
      this.router.navigate(["/articles", article._id, "archived"]);
    } else {
      this.router.navigate(["/articles", article._id]);
    }
  }
}
