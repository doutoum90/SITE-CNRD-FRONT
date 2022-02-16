import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
  editorData = `<h1>Titre article à éditer</h1>
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
  console = console;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.article$ = this.articleService.getArticle(
      this._activatedRoute.snapshot.params.id
    );
    this.createForm();
  }
  createForm() {
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
    console.log(posts);
    this.articleService.addArticle(posts).subscribe((re) => {
      console.log(re);
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
