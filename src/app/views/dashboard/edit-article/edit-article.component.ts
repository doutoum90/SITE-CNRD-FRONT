import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Article } from "../../articles/model/article.model";

@Component({
  selector: "app-edit-article",
  templateUrl: "./edit-article.component.html",
  styleUrls: ["./edit-article.component.scss"],
})
export class EditArticleComponent implements OnInit {
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
  article$: Observable<Article>;

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
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.createForm();
    this.article$ = this.articleService.getArticle(
      this._activatedRoute.snapshot.params.id
    );
    this.article$.subscribe((art) => {
      this.firstFormGroup.patchValue({
        postTitle: art.title,
        _id: art._id,
        isArchived: art.isArchived,
      });
      this.thirdFormGroup.patchValue({
        content: art.content,
        shortContent: art.shortContent,
      });
    });
  }

  createForm() {
    this.firstFormGroup = this.fb.group({
      _id: [""],
      isArchived: [],
      postTitle: ["", Validators.required],
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
      _id: this.firstFormGroup.value._id,
      title: this.firstFormGroup.value.postTitle,
      dateModification: new Date(),
      ...this.thirdFormGroup.value,
      documents: [],
      // documents: this.uploader.queue,
    };
    this.articleService.editArticle(posts).subscribe((re) => {
      this.router.navigate(["/dashboard/articles"]);
      this.egretLoader.open(`Article ${re.title} modifié avec succés`, {
        width: "320px",
      });
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
    });
  }

  onContentChanged() {}
  onSelectionChanged() {}
}
