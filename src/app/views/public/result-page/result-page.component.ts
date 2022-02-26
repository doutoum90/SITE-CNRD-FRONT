import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService } from "app/shared/search/search.service";
import { ArticlesService } from "app/views/articles/articles.service";
import {
  ArticlePagine,
  Pagination,
} from "app/views/articles/model/article.model";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-result-page",
  templateUrl: "./result-page.component.html",
  styleUrls: ["./result-page.component.scss"],
})
export class ResultPageComponent implements OnInit, OnDestroy {
  articles$: Observable<ArticlePagine>;
  searchTermSub: Subscription;
  page: Pagination = { count: 0, pageSize: 5, limit: 5, offset: 1 };

  constructor(
    public readonly searchService: SearchService,
    public readonly articleService: ArticlesService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.searchTermSub = this.searchService.searchTerm$.subscribe((term) => {
      this.articles$ = this.articleService.getArticleByKeyWord(term, this.page);
    });
  }
  readValue(event) {
    if (event.type == "click") {
      this.router.navigate([`articles/${event.row?._id}`]);
    }
  }

  paginationCallBack(event) {
    this.page = event;
    this.searchService.searchTerm$.subscribe((term) => {
      // console.log(event, term);
      this.articles$ = this.articleService.getArticleByKeyWord(term, event);
    });
  }

  ngOnDestroy() {
    if (this.searchTermSub) {
      this.searchTermSub.unsubscribe();
    }
  }
}
