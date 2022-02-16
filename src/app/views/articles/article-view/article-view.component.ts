import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesService } from "../articles.service";
import { Article } from "../model/article.model";

@Component({
  selector: "app-article-view",
  templateUrl: "./article-view.component.html",
  styleUrls: ["./article-view.component.scss"],
})
export class ArticleViewComponent implements OnInit {
  commentForm: FormGroup;
  article$: Observable<Article>;
  constructor(
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  createForm() {
    this.commentForm = this.formBuilder.group({
      full_name: ["", [Validators.required]],
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
    this.article$ = this.articleService.getArticle(
      this._activatedRoute.snapshot.params.id
    );
    this.createForm();
  }

  onSubmitComment() {
    // this.submitted = true;
    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return false;
    } else {
      const currentUser = { id: "rereerre", image: "", userName: "John Doe" };
      this.articleService.addComment(
        { ...this.commentForm.value, datePublication: new Date() },
        currentUser.id,
        this._activatedRoute.snapshot.params.id
      );
    }
  }
}
