import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Article } from "../../articles/model/article.model";

@Component({
  selector: "app-list-article",
  templateUrl: "./list-article.component.html",
  styleUrls: ["./list-article.component.scss"],
  animations: egretAnimations,
})
export class ListArticleComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(
    private router: Router,
    private jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService
  ) {}

  ngOnInit() {
    // const user = this.jwtAuth.getUser();
    // console.log(user);
    this.articles$ = this.articleService.getAllArticles();
  }

  detail(data: Article) {
    this.router.navigate(["/dashboard/articles/edit", data.id]);
  }

  deleteItem(data: Article) {
    console.log(data);
  }

  archiver(data: Article) {
    if (!data.isArchived) {
      this.articleService.archiver(data.id, !data.isArchived);
    }
  }
}
