import { Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesService } from "../articles.service";
import { Article } from "../model/article.model";
import { v4 as uuidv4 } from "uuid";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { take } from "rxjs/operators";

@Component({
  selector: "app-article-view",
  templateUrl: "./article-view.component.html",
  styleUrls: ["./article-view.component.scss"],
})
export class ArticleViewComponent implements OnInit {
  commentForm: FormGroup;
  article$: Observable<Article>;

  @ViewChild("autosize") autosize: CdkTextareaAutosize;
  constructor(
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly _ngZone: NgZone
  ) {}

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  createForm() {
    this.commentForm = this.formBuilder.group({
      nom: ["", [Validators.required]],
      mail: ["", [Validators.required, Validators.email]],
      content: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.loadData();
    this.createForm();
  }

  private loadData() {
    this.article$ = this.articleService.getArticle(
      this._activatedRoute.snapshot.params.id
    );
  }

  onSubmitComment(article: Article) {
    if (this.commentForm.invalid) {
      return false;
    } else {
      const currentUser = { _id: uuidv4(), image: "", userName: "John Doe" };
      this.articleService
        .addComment(
          article,
          { ...this.commentForm.value, datePublication: new Date() },
          currentUser._id,
          this._activatedRoute.snapshot.params.id
        )
        .subscribe((res) => {
          this.createForm();
          this.loadData();
        });
    }
  }
}
