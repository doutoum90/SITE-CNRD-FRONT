import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Membre } from "../../articles/model/article.model";

@Component({
  selector: "app-edit-membre",
  templateUrl: "./edit-membre.component.html",
  styleUrls: ["./edit-membre.component.scss"],
})
export class EditMemberComponent implements OnInit {
  addMemberFormGroup: FormGroup;
  member$: Observable<Membre>;

  public uploader: FileUploader = new FileUploader({
    url: "https://evening-anchorage-315.herokuapp.com/api/",
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
    this.member$ = this.articleService.getMembreById(
      this._activatedRoute.snapshot.params.id
    );
    this.member$.subscribe((member) => {
      this.addMemberFormGroup.patchValue({
        id: member.id,
        nom: member.nom,
        prenom: member.prenom,
        fonction: member.fonction,
        metier: member.metier,
        photo: member.photo,
        isPresident: member.isPresident,
      });
    });
  }
  createForm() {
    this.addMemberFormGroup = this.fb.group({
      id: [""],
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      fonction: ["", Validators.required],
      metier: [""],
      photo: [""],
      isPresident: [false],
    });
  }

  submit() {
    const membre: Membre = {
      ...this.addMemberFormGroup.value,
    };
    this.articleService.editMember(membre).subscribe((re) => {
      this.egretLoader.open(
        `Le membre ${re.nom} + ${re.prenom} a été modifié avec succés`,
        {
          width: "320px",
        }
      );
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["dashboard/members"]);
    });
  }
}
