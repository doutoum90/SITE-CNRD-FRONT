import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { FileUploader } from "ng2-file-upload";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Article } from "../../articles/model/article.model";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.scss"],
})
export class AddArticleComponent implements OnInit {
  /*<mat-form-field class="example-chip-list">
    <mat-chip-list #chipList aria-label="Fruit selection">
      <mat-chip
        *ngFor="let fruit of fruits"
        [selectable]="selectable"
        [removable]="removable"
        (removed)="remove(fruit)">
        {{fruit}}
        <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
      </mat-chip>
      <input
        placeholder="New fruit..."
        #fruitInput
        [formControl]="fruitCtrl"
        [matAutocomplete]="auto"
        [matChipInputFor]="chipList"
        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
        [matChipInputAddOnBlur]="addOnBlur"
        (matChipInputTokenEnd)="add($event)">
    </mat-chip-list>
    <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
      <mat-option *ngFor="let fruit of filteredFruits | async" [value]="fruit">
        {{fruit}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>*/
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

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  foorthFormGroup: FormGroup;

  public uploader: FileUploader = new FileUploader({
    url: "https://evening-anchorage-315.herokuapp.com/api/",
  });
  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      content: ["", Validators.required],
      shortContent: [""],
    });
    this.foorthFormGroup = this.fb.group({
      files: [""],
    });
  }

  submit() {
    const posts: Article = {
      id: uuidv4(),
      title: this.firstFormGroup.value.firstCtrl,
      isArchived: false,
      datePublication: new Date(),
      icon: "",
      ...this.thirdFormGroup.value,
      documents: [],
      // documents: this.uploader.queue,
    };
    this.articleService.addArticle(posts).subscribe((re) => {
      this.egretLoader.open(`Article ${re.title} ajouté avec succés`, {
        width: "320px",
      });
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/articles"]);
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
