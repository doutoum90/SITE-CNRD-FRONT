import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
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
    this.addUserFormGroup = this.fb.group({
      id: [""],
      nom: [""],
      prenom: [""],
      age: [0],
      email: [""],
      roles: this.fb.array(["SA", "Admin", "Editor"]),
      image: [""],
      userName: [""],
      phone: [""],
      genre: [""],
    });
  }

  submit() {
    const user: Users = {
      id: uuidv4(),
      ...this.addUserFormGroup.value,
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
