import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories, Users } from "../../articles/model/article.model";

@Component({
  selector: "app-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.scss"],
})
export class EditCategoryComponent implements OnInit {
  editorContentData = `<h1>Titre article à éditer</h1>
  <p><br></p><p><strong >Lorem Ipsum</strong>
  <span>&nbsp;is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>`;

  editorShortContentData = `<h1>Titre article à éditer</h1>
  <p><br></p><p><strong >Lorem Ipsum</strong>
  <span>&nbsp;is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>`;

  editCategoryFormGroup: FormGroup;

  category$: Observable<Categories>;
  currentUser: Users;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService,
    public jwtAuth: JwtAuthService
  ) {}

  ngOnInit() {
    this.createForm();
    this.category$ = this.articleService.getCategory(
      this._activatedRoute.snapshot.params.id
    );
    this.currentUser = this.jwtAuth.getUser();
    this.category$.subscribe((cat) => {
      console.log(cat);
      this.editCategoryFormGroup.patchValue({
        title: cat.title,
        _id: cat._id,
        libelles: cat.libelles,
        description: cat.description,
        auteur: {
          nom: this.currentUser.nom,
          prenom: this.currentUser.prenom,
          photo: this.currentUser.photo,
        },
      });
    });
  }
  createForm() {
    this.editCategoryFormGroup = this.fb.group({
      _id: [""],
      title: ["", Validators.required],
      libelles: ["", Validators.required],
      description: ["", Validators.required],
      auteur: [],
    });
  }

  submit() {
    const category: Categories = {
      ...this.editCategoryFormGroup.value,
      dateModification: new Date(),
    };
    this.articleService.editCategory(category).subscribe((re) => {
      this.egretLoader.open(`Categorie ${re.libelles} modifiée avec succés`, {
        width: "320px",
      });
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/dashboard/categories"]);
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
