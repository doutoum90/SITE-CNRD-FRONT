import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesService } from "../articles.service";
import { Article } from "../model/article.model";

@Component({
  selector: "app-article-cat",
  templateUrl: "./article-cat.component.html",
  styleUrls: ["./article-cat.component.scss"],
})
export class ArticleCatComponent implements OnInit {
  articles$: Observable<Article[]>;
  archivedArticle$: Observable<Article[]>;
  articleAlaUne$: Observable<Article[]>;
  constructor(
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const catId = this._activatedRoute.snapshot.params.id;

    this.articles$ = this.articleService.getArticlesByCat(catId);
    this.archivedArticle$ = this.articleService.getArchivedArticle();
    this.articleAlaUne$ = this.articleService.getArticleAlaUne();
    this.articleAlaUne$.subscribe(console.log);
  }

  showArticle(article: Article) {
    if (article.isArchived) {
      this.router.navigate(["/articles", article._id, "archived"]);
    } else {
      this.router.navigate(["/articles", article._id]);
    }
  }
}
