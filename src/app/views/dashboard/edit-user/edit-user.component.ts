import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Users } from "../../articles/model/article.model";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  ROLES = ["SA", "Admin", "Editor", "User", "Guest"];
  categoryFormGroup: FormGroup;

  user$: Observable<Users>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.createForm();
    this.user$ = this.articleService.getUser(
      this._activatedRoute.snapshot.params.id
    );
    this.user$.subscribe((user) => {
      this.categoryFormGroup.patchValue({
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        age: user.age,
        email: user.email,
        roles: user.roles,
        image: user.image,
        userName: user.userName,
        phone: user.phone,
        genre: user.genre,
      });
    });
  }
  createForm() {
    this.categoryFormGroup = this.fb.group({
      id: [""],
      nom: [""],
      prenom: [""],
      age: [0],
      email: ["", Validators.email],
      roles: [""],
      image: [""],
      userName: [""],
      phone: [""],
      genre: [""],
      motDePasse: [""],
      motDePasseConfirmation: [""],
    });
  }

  submit() {
    const user: Users = {
      ...this.categoryFormGroup.value,
      dateModification: new Date(),
    };
    this.articleService.editUser(user).subscribe((re) => {
      this.egretLoader.open(
        `Utilisateur ${re.nom} ${re.prenom} modifié avec succés`,
        {
          width: "320px",
        }
      );
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/dashboard/users"]);
    });
  }
}
