import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories } from "../../articles/model/article.model";

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

  categoryFormGroup: FormGroup;

  category$: Observable<Categories>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.createForm();
    this.category$ = this.articleService.getCategory(
      this._activatedRoute.snapshot.params.id
    );
    this.category$.subscribe((art) => {
      this.categoryFormGroup.patchValue({
        title: art.title,
        _id: art._id,
        libelles: art.libelles,
        description: art.description,
      });
    });
  }
  createForm() {
    this.categoryFormGroup = this.fb.group({
      _id: [""],
      title: ["", Validators.required],
      libelles: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  submit() {
    const category: Categories = {
      ...this.categoryFormGroup.value,
      dateModification: new Date(),
      idUser: "idUser",
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
