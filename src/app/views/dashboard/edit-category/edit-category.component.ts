import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
    private fb: FormBuilder,
    private router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
    this.category$ = this.articleService.getCatery(
      this._activatedRoute.snapshot.params.id
    );
    this.category$.subscribe((art) => {
      this.categoryFormGroup.patchValue({
        title: art.title,
        id: art.id,
        libelles: art.libelles,
        description: art.description,
      });
    });
  }
  createForm() {
    this.categoryFormGroup = this.fb.group({
      id: [""],
      title: ["", Validators.required],
      libelles: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  submit() {
    const category: Categories = {
      id: uuidv4(),
      ...this.categoryFormGroup.value,
      dateModification: new Date(),
      idUser: "idUser",
    };
    console.log(category);
     this.articleService.editCategory(category).subscribe((re) => {
      if (re === -1) {
        alert("Une erreur est survenue");
      } else {
        alert("Catégory modifiée avec succès");
        this.router.navigate(["/dashboard/categories"]);
      }
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
