import { Component, OnInit, OnDestroy } from "@angular/core";
import { SearchService } from "app/shared/search/search.service";
import { ArticlesService } from "app/views/articles/articles.service";
import { Observable, Subscription } from "rxjs";
import { CountryService } from "../country.service";

@Component({
  selector: "app-result-page",
  templateUrl: "./result-page.component.html",
  styleUrls: ["./result-page.component.scss"],
})
export class ResultPageComponent implements OnInit, OnDestroy {
  articles$: Observable<any[]>;
  searchTermSub: Subscription;

  constructor(
    public searchService: SearchService,
    public articleService: ArticlesService
  ) {}

  ngOnInit() {
    this.searchTermSub = this.searchService.searchTerm$.subscribe((term) => {
      console.log(term);
      this.articles$ = this.articleService.getArticleByKeyWord(term);
      this.articles$.subscribe(console.log);
    });
  }
  readValue() {
    console.log("erjhehrjer");
  }
  pageinationCallBack(event) {
    console.log(event);
  }

  ngOnDestroy() {
    if (this.searchTermSub) {
      this.searchTermSub.unsubscribe();
    }
  }
}
