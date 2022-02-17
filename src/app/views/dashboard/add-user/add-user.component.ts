import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../../articles/articles.service";
import { Categories, Users } from "../../articles/model/article.model";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
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
      email: [""],
      roles: [""],
      image: [""],
      userName: [""],
      phone: [""],
      genre: [""],
    });
  }

  submit() {
    const user: Users = {
      id: uuidv4(),
      ...this.categoryFormGroup.value,
      dateCreation: new Date(),
    };
    this.articleService.addUser(user).subscribe((re) => {
      this.router.navigate(["/dashboard/users"]);
      this.egretLoader.open(
        `Utilisateur ${re.nom} ${re.prenom} ajouté avec succés`,
        {
          width: "320px",
        }
      );
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
    });
  }
}
