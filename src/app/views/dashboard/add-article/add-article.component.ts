import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories, Users } from "../../articles/model/article.model";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.scss"],
})
export class AddArticleComponent implements OnInit {
  editorContentData = `<h1>Titre article à éditer</h1>
  <p><br></p><p><strong >Lorem Ipsum</strong>
  <span>&nbsp;is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>`;

  addEditPostFormGroup: FormGroup;

  categoryFormControl = new FormControl();
  article$: Observable<Article>;
  categories$: Observable<Categories[]>;
  categories: Categories[];
  currentUser: Users;
  nouvelleDate = new Date();

  constructor(
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService,
    private readonly jwtAuth: JwtAuthService
  ) {}

  ngOnInit() {
    this.createForm();
    this.currentUser = this.jwtAuth.getUser();
    this.categories$ = this.articleService.getAllCategories();
    this.categories$.subscribe((cats) => {
      this.categories = cats;
    });
    if (this._activatedRoute.snapshot.params.id) {
      this.article$ = this.articleService.getArticle(
        this._activatedRoute.snapshot.params.id
      );
      this.article$.subscribe((art) => {
        this.addEditPostFormGroup.patchValue({
          _id: art._id,
          title: art.title,
          content: art.content,
          categories: art.categories || "",
          auteur: this.currentUser._id,
        });
      });
    } else {
      this.addEditPostFormGroup.patchValue({
        auteur: this.currentUser._id,
      });
    }
  }

  createForm() {
    this.addEditPostFormGroup = new FormGroup({
      _id: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
      categories: this.categoryFormControl,
      auteur: new FormControl(""),
    });
  }

  getCat(cats: Categories[]) {
    return cats?.map((cat) => cat.libelles);
  }

  submit() {
    const edition = !!this._activatedRoute.snapshot.params.id;
    let posts: Article = this.addEditPostFormGroup.value;
    if (!edition) {
      posts = {
        datePublication: new Date(),
        ...posts,
        categories: this.categories
          .filter((cat) => posts.categories.includes(cat.libelles))
          .map((cat) => cat._id),
      };
      delete posts._id;
    } else {
      posts = {
        dateModification: new Date(),
        ...posts,
        categories: this.categories
          .filter((cat) => posts.categories.includes(cat.libelles))
          .map((cat) => cat._id),
      };
    }
    this.articleService.addEditArticle(posts, edition).subscribe((re) => {
      this.egretLoader.open(
        `Article ${re.title} ${edition ? "modifié" : "publié"} avec succés`,
        {
          width: "320px",
        }
      );
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/dashboard/articles"]);
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
