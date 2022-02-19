import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Adherant } from "../articles/model/article.model";

import { v4 as uuidv4 } from "uuid";
import { ArticlesService } from "../articles/articles.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Router } from "@angular/router";

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

  ngOnInit() {
    this.basicForm = this.fb.group({
      nom: [""],
      prenom: [""],
      dateNaissance: [],
      LieuNaissance: [""],
      nationalite: [""],
      cotisation: [],

      profession: [""],
      adresse: [""],
      phone: [""],
      mail: [""],
      photo: [""],

      agreed: [],
    });
  }
  submit() {
    const adherant: Adherant = {
      id: uuidv4(),
      ...this.basicForm.value,
      // documents: this.uploader.queue,
    };
    this.articleService.addAdherant(adherant).subscribe((re) => {
      this.egretLoader.open(
        `Article ${re.nom} ${re.prenom} ajouté avec succés`,
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
