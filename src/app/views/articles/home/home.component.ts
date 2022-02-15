import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { ArticlesService } from "../articles.service";
import { Article } from "../model/article.model";

@Component({
  selector: "article-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  user = "Mahamat";
  archivedArticle$: Observable<Article[]>;
  articles$: Observable<Article[]>;
  readMore = undefined;
  readMoreLabel = "";

  constructor(
    private readonly articleService: ArticlesService,
    private readonly router: Router,
    private readonly translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.archivedArticle$ = this.articleService.getArchivedArticle();
    this.articles$ = this.articleService.getArticles();
  }

  showArticle(article) {
    this.router.navigate(["/articles", article.id]);
  }

  concatReadMore(content: string, index: number) {
    const suite = ``;

    return content + suite;
  }

  readMoreArticle(index: number) {
    console.log(index);
    this.readMore = index;
  }
}
