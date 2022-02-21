import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories } from "../../articles/model/article.model";

@Component({
  selector: "app-edit-article",
  templateUrl: "./edit-article.component.html",
  styleUrls: ["./edit-article.component.scss"],
})
export class EditArticleComponent implements OnInit {
  editPostFormGroup: FormGroup;

  categoryFormControl = new FormControl();
  article$: Observable<Article>;
  categories$: Observable<Categories[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.categories$ = this.articleService.getAllCategories();
    this.categories$.subscribe(console.log);
    this.createForm();
    this.article$ = this.articleService.getArticle(
      this._activatedRoute.snapshot.params.id
    );
    this.article$.subscribe((art) => {
      console.log(art.cats);
      this.editPostFormGroup.patchValue({
        _id: art._id,
        title: art.title,
        content: art.content,
        cats: art.cats || "",
      });
    });
  }

  createForm() {
    this.editPostFormGroup = new FormGroup({
      _id: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
      cats: this.categoryFormControl,
    });
  }

  submit() {
    const posts: Article = {
      dateModification: new Date(),
      ...this.editPostFormGroup.value,
    };
    this.articleService.editArticle(posts).subscribe((re) => {
      this.egretLoader.open(`Article ${re.title} modifié avec succés`, {
        width: "320px",
      });
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/dashboard/articles"]);
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
