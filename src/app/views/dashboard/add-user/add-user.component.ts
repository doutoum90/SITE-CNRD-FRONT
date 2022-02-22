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
  addUserFormGroup: FormGroup;

  allComplete: boolean = false;
  public editEnabled = true;

  public clear() {
    this.addUserFormGroup.get("photo").setValue(null);
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
  }

  createForm() {
    let password = new FormControl("", Validators.required);
    let confirmPassword = new FormControl(
      "",
      CustomValidators.equalTo(password)
    );

    this.addUserFormGroup = new FormGroup({
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
  }

  submit() {
    const user: Users = {
      ...this.addUserFormGroup.value,
      isActive: false,
      roles: "SA",
      dateCreation: new Date(),
    };
    this.articleService.addUser(user).subscribe((re) => {
      this.egretLoader.open(
        `Utilisateur ${re.nom} ${re.prenom} ajouté avec succés`,
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
