import { Component, OnInit } from "@angular/core";
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
 
  constructor(private readonly articleService: ArticlesService) {}
  ngOnInit(): void {
    this.archivedArticle$ = this.articleService.getArchivedArticle();
    this.articles$ = this.articleService.getArticles();
  }
}
