import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesService } from "../articles.service";

@Component({
  selector: "article-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  user = "Mahamat";
  archivedArticle$;
  articles$;

  constructor(
    private readonly articleService: ArticlesService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.archivedArticle$ = this.articleService.getArchivedArticle();
    this.articles$ = this.articleService.getArticles();
  }

  showArticle(article) {
    this.router.navigate(["/articles", article.id]);
  }
}
