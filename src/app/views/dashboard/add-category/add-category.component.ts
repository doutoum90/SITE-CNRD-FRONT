import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { FileUploader } from "ng2-file-upload";
import { v4 as uuidv4 } from "uuid";
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
  addCategoryFormGroup: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,
    private readonly jwtAuth: JwtAuthService
  ) {}

  ngOnInit() {
    this.currentUser = this.jwtAuth.getUser();

    this.createForm();
    this.addCategoryFormGroup.patchValue({
      auteur: {
        nom: this.currentUser.nom,
        prenom: this.currentUser.prenom,
        photo: this.currentUser.photo,
      },
    });
  }
  createForm() {
    this.addCategoryFormGroup = this.fb.group({
      title: ["", Validators.required],
      libelles: ["", Validators.required],
      description: ["", Validators.required],
      auteur: [""],
    });
  }

  submit() {
    const category: Categories = {
      ...this.addCategoryFormGroup.value,
      datePublication: new Date(),
      isArchived: false,
    };
    this.articleService.addCategory(category).subscribe((re) => {
      this.egretLoader.open(`Catégorie ${re.libelles} ajouté avec succés`, {
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
