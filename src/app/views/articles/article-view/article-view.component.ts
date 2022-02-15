import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ArticlesService } from "../articles.service";

@Component({
  selector: "app-article-view",
  templateUrl: "./article-view.component.html",
  styleUrls: ["./article-view.component.scss"],
})
export class ArticleViewComponent implements OnInit {
  commentForm: FormGroup;
  article$;
  constructor(
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}


  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
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
     /*  this.commentInfo.push({
        commentId : this.id++,
        currentDate : new Date(),
        commentTxt: this.commentForm.controls['comment'].value,
        replyComment: []
      });
      this.usercomment.emit(this.commentInfo); */
    }
  }
}
