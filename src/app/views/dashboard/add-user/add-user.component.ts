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
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Users } from "../../articles/model/article.model";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  ALL_ROLES: string[] = ["SA", "Admin", "Editor"];
  SELECT_ROLE: string[] = ["SA"];

  user$: Observable<Users>;
  addEditUserFormGroup: FormGroup;

  allComplete: boolean = false;
  public editEnabled = true;
  edition = false;

  public clear() {
    this.addEditUserFormGroup.get("photo").setValue(null);
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService
  ) {}

  ngOnInit() {
    this.edition = !!this._activatedRoute.snapshot.params.id;
    this.createForm();
    if (this._activatedRoute.snapshot.params.id) {
      this.user$ = this.articleService.getUser(
        this._activatedRoute.snapshot.params.id
      );
      this.user$.subscribe((user) => {
        this.addEditUserFormGroup.patchValue({
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
  }

  createForm() {
    if (!this.edition) {
      const password = new FormControl("", Validators.required);
      const confirmPassword = new FormControl(
        "",
        CustomValidators.equalTo(password)
      );
      this.addEditUserFormGroup = new FormGroup({
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

        motDePasse: password,
        confirmPassword: confirmPassword,
        agreed: new FormControl("", (control: FormControl) => {
          const agreed = control.value;
          if (!agreed) {
            return { agreed: true };
          }
          return null;
        }),
      });
    } else {
      this.addEditUserFormGroup = new FormGroup({
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
  }

  submit() {
    const user: Users = {
      ...this.addEditUserFormGroup.value,
      isActive: false,
      roles: "SA",
      dateCreation: new Date(),
    };
    this.articleService.addEditUser(user, this.edition).subscribe((re) => {
      this.egretLoader.open(
        `Utilisateur ${re.nom} ${re.prenom} ${
          this.edition ? "modifié" : "ajouté"
        } avec succés`,
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
