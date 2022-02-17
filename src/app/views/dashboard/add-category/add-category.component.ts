import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories } from "../../articles/model/article.model";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"],
})
export class AddCategoryomponent implements OnInit {
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

  public uploader: FileUploader = new FileUploader({
    url: "https://evening-anchorage-315.herokuapp.com/api/",
  });
  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly articleService: ArticlesService
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
      id: uuidv4(),
      ... this.categoryFormGroup.value,
      datePublication: new Date(),
      idUser: "idUser",
    };
    console.log(category);
    this.articleService.addCategory(category).subscribe((re) => {
      if (re === -1) {
        alert("Une erreur est survenue");
      } else {
        alert("Article ajouté avec succès");
        this.router.navigate(["/articles"]);
      }
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
