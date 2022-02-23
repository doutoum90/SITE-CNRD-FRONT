import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Membre } from "../../articles/model/article.model";

@Component({
  selector: "app-add-membre",
  templateUrl: "./add-membre.component.html",
  styleUrls: ["./add-membre.component.scss"],
})
export class AddMembreComponent implements OnInit {
  addEditMemberFormGroup: FormGroup;
  public editEnabled = true;
  member$: Observable<Membre>;
  edition: boolean;

  public clear() {
    this.addEditMemberFormGroup.get("photo").setValue(null);
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
    this.edition = !!!this._activatedRoute.snapshot.params.id;
    if (this.edition) {
      this.member$ = this.articleService.getMembreById(
        this._activatedRoute.snapshot.params.id
      );
      this.member$.subscribe((member) => {
        this.addEditMemberFormGroup.patchValue({
          _id: member._id,
          nom: member.nom,
          prenom: member.prenom,
          fonction: member.fonction,
          metier: member.metier,
          photo: member.photo,
          isPresident: member.isPresident,
        });
      });
    }
  }

  createForm() {
    this.addEditMemberFormGroup = this.fb.group({
      _id: [""],
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
      ...this.addEditMemberFormGroup.value,
    };
    this.articleService.addEditMembre(membre, this.edition).subscribe((re) => {
      this.egretLoader.open(
        `Le membre ${re.nom} + ${re.prenom} ${
          this.edition ? "modifié" : "ajouté"
        } avec succés`,
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
