import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ArticlesService } from "app/views/articles/articles.service";
import { Article, Pagination } from "app/views/articles/model/article.model";
import { Observable } from "rxjs";

@Component({
  selector: "article-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  archivedArticle$: Observable<Article[]>;
  articles$: Observable<Article[]>;
  articleAlaUne$: Observable<Article>;

  page: Pagination = { count: 0, pageSize: 5, limit: 5, offset: 1 };
  pageArticle: Pagination = { count: 0, pageSize: 5, limit: 5, offset: 1 };

  constructor(
    private readonly articleService: ArticlesService,
    private readonly router: Router,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.archivedArticle$ = this.articleService.getArchivedArticle(
      this.pageArticle
    );
    this.archivedArticle$.subscribe(console.log);
    this.articles$ = this.articleService.getArticles(this.page);
    this.articleAlaUne$ = this.articleService.getArticleAlaUne(this.page);
  }

  showArticle(article: Article) {
    if (article.isArchived) {
      this.router.navigate(["/articles", article._id, "archived"]);
    } else {
      this.router.navigate(["/articles", article._id]);
    }
  }
}
