import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
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

  addPostFormGroup: FormGroup;
  categoryFormControl = new FormControl();
  categories$: Observable<Categories[]>;
  currentUser: Users;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,
    public jwtAuth: JwtAuthService
  ) {}

  ngOnInit() {
    this.categories$ = this.articleService.getAllCategories();
    this.createForm();
    this.currentUser = this.jwtAuth.getUser();
    this.addPostFormGroup.patchValue({
      auteur: {
        nom: this.currentUser.nom,
        prenom: this.currentUser.prenom,
        photo: this.currentUser.photo,
      },
    });
  }
  createForm() {
    this.addPostFormGroup = new FormGroup({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
      cats: this.categoryFormControl,
      auteur: new FormControl(),
    });
  }

  submit() {
    const posts: Article = {
      ...this.addPostFormGroup.value,
      datePublication: new Date(),
    };
    this.articleService.addArticle(posts).subscribe((re) => {
      this.egretLoader.open(`Article ${re.title} ajouté avec succés`, {
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
