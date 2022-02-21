import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { FileUploader } from "ng2-file-upload";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Categories } from "../../articles/model/article.model";

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

  categoryFormGroup: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.categoryFormGroup = this.fb.group({
      title: ["", Validators.required],
      libelles: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  submit() {
    const category: Categories = {
      ...this.categoryFormGroup.value,
      datePublication: new Date(),
      isArchived: false,
      idUser: "idUser",
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
