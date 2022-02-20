import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { FileUploader } from "ng2-file-upload";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Membre } from "../../articles/model/article.model";

@Component({
  selector: "app-add-membre",
  templateUrl: "./add-membre.component.html",
  styleUrls: ["./add-membre.component.scss"],
})
export class AddMembreComponent implements OnInit {
  addMemberFormGroup: FormGroup;
  public editEnabled = true;

  public clear() {
    this.addMemberFormGroup.get("photo").setValue(null);
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.addMemberFormGroup = this.fb.group({
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
      id: uuidv4(),
      ...this.addMemberFormGroup.value,
    };
    this.articleService.addMembre(membre).subscribe((re) => {
      this.egretLoader.open(
        `Le membre ${re.nom} + ${re.prenom} ajouté avec succés`,
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
