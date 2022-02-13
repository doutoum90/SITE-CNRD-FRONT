import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: "app-article-view",
  templateUrl: "./article-view.component.html",
  styleUrls: ["./article-view.component.scss"],
})
export class ArticleViewComponent implements OnInit {
  article$;
  constructor(
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.article$ = this.articleService.getArticle(this._activatedRoute.snapshot.params.id);
  }
}
