import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { CustomValidators } from "ngx-custom-validators";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Users } from "../../articles/model/article.model";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  addUserFormGroup: FormGroup;

  user$: Observable<Users>;
  public editEnabled = true;

  public clear() {
    this.addUserFormGroup.get("photo").setValue(null);
  }

  constructor(
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.createForm();
    // console.log(this._activatedRoute.snapshot.params.id);
    this.user$ = this.articleService.getUser(
      this._activatedRoute.snapshot.params.id
    );
    this.user$.subscribe((user) => {
      console.log(user);
      this.addUserFormGroup.patchValue({
        _id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        roles: user.roles,
        userName: user.userName,
        phone: user.phone,
        genre: user.genre,
        photo: user.photo,
        dateNaissance: user.dateNaissance,
      });
    });
  }
  createForm() {
    this.addUserFormGroup = new FormGroup({
      _id: new FormControl(""),
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      dateNaissance: new FormControl(),
      email: new FormControl("", [Validators.required, Validators.email]),
      userName: new FormControl("", [
        Validators.minLength(4),
        Validators.maxLength(9),
      ]),
      phone: new FormControl("", [Validators.required]),
      genre: new FormControl(""),
      photo: new FormControl("", [Validators.required]),
      agreed: new FormControl("", (control: FormControl) => {
        const agreed = control.value;
        if (!agreed) {
          return { agreed: true };
        }
        return null;
      }),
    });
  }

  submit() {
    const user: Users = {
      ...this.addUserFormGroup.value,
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
