import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

import { v4 as uuidv4 } from "uuid";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Router } from "@angular/router";
import { ArticlesService } from "app/views/articles/articles.service";
import { Adherant } from "app/views/articles/model/article.model";

@Component({
  selector: "app-adherer",
  templateUrl: "./adherer.component.html",
  styleUrls: ["./adherer.component.scss"],
})
export class AdhererComponent implements OnInit {
  basicForm: FormGroup;
  cots = [
    {
      libelle: "Membre du Bureau executif résident en Afrique",
      montant: 50000,
      devise: "FCFA",
    },
    {
      libelle: "Membre du Bureau executif résident en Europe",
      montant: 100,
      devise: "Euro",
    },
    {
      libelle: "Militant résident en Afrique",
      montant: 25000,
      devise: "FCFA",
    },
    {
      libelle: "Militant résident en Europe",
      montant: 50,
      devise: "Euro",
    },
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly egretLoader: AppLoaderService
  ) {}
  public editEnabled = true;
  
  public clear() {
    this.basicForm.get("photo").setValue(null);
  }

  ngOnInit() {
    this.basicForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      dateNaissance: new FormControl(),
      nationalite: new FormControl(),
      LieuNaissance: new FormControl(),
      adresse: new FormControl(),
      profession: new FormControl(),
      cotisation: new FormControl(),
      mail: new FormControl("", [Validators.required, Validators.email]),
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
    const adherant: Adherant = {
      ...this.basicForm.value,
    };
    this.articleService.addAdherant(adherant).subscribe((re) => {
      this.egretLoader.open(
        `Adherant ${re.nom} ${re.prenom} ajouté avec succés`,
        {
          width: "320px",
        }
      );
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/"]);
    });
  }
}
