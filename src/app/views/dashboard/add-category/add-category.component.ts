import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Categories, Users } from "../../articles/model/article.model";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"],
})
export class AddCategoryComponent implements OnInit {
  editorContentData = `<h1>Titre article à éditer</h1>
  <p><br></p><p><strong >Lorem Ipsum</strong>
  <span>&nbsp;is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>`;
  currentUser: Users;
  addEditCategoryFormGroup: FormGroup;

  category$: Observable<Categories>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService,
    private readonly jwtAuth: JwtAuthService
  ) {}

  ngOnInit() {
    this.currentUser = this.jwtAuth.getUser();

    this.createForm();
    this.addEditCategoryFormGroup.patchValue({
      auteur: {
        nom: this.currentUser.nom,
        prenom: this.currentUser.prenom,
        photo: this.currentUser.photo,
      },
    });

    if (this._activatedRoute.snapshot.params.id) {
      this.category$ = this.articleService.getCategory(
        this._activatedRoute.snapshot.params.id
      );
      this.currentUser = this.jwtAuth.getUser();
      this.category$.subscribe((cat) => {
        console.log(cat);
        this.addEditCategoryFormGroup.patchValue({
          title: cat.title,
          _id: cat._id,
          libelles: cat.libelles,
          description: cat.description,
        });
      });
    }
  }
  createForm() {
    this.addEditCategoryFormGroup = this.fb.group({
      _id: [""],
      title: ["", Validators.required],
      libelles: ["", Validators.required],
      description: ["", Validators.required],
      auteur: [""],
    });
  }

  submit() {
    const edition = !!this._activatedRoute.snapshot.params.id;
    const category: Categories = {
      ...this.addEditCategoryFormGroup.value,
      datePublication: new Date(),
      isArchived: false,
    };
    this.articleService.addEditCategory(category, edition).subscribe((re) => {
      this.egretLoader.open(
        `Catégorie ${re.libelles} ${
          edition ? "modifiée" : "ajouté"
        } avec succés`,
        {
          width: "320px",
        }
      );
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/dashboard/categories"]);
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
