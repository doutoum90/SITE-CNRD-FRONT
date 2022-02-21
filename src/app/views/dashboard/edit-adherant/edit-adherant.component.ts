import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Adherant, Cotisation } from "../../articles/model/article.model";

@Component({
  selector: "app-edit-adherant",
  templateUrl: "./edit-adherant.component.html",
  styleUrls: ["./edit-adherant.component.scss"],
})
export class EditAdherantComponent implements OnInit {
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
  adherant$: Observable<Adherant>;
  public editEnabled = true;

  public clear() {
    this.basicForm.get("photo").setValue(null);
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly articleService: ArticlesService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly egretLoader: AppLoaderService
  ) {}

  compare(cot: Cotisation, cotisationCourant: Cotisation) {
    return (
      cot?.devise === cotisationCourant?.devise &&
      cot?.libelle === cotisationCourant?.libelle &&
      cot?.montant === cotisationCourant?.montant
    );
  }
  ngOnInit() {
    this.createForm();
    this.adherant$ = this.articleService.getAllAdherantById(
      this._activatedRoute.snapshot.params.id
    );
    this.adherant$.subscribe((ad) => {
      this.basicForm.patchValue({
        _id: ad._id,
        nom: ad?.nom,
        prenom: ad?.prenom,
        dateNaissance: ad?.dateNaissance,
        LieuNaissance: ad?.LieuNaissance,
        nationalite: ad?.nationalite,
        cotisation: ad?.cotisation,

        profession: ad?.profession,
        adresse: ad?.adresse,
        phone: ad?.phone,
        mail: ad?.mail,
        photo: ad?.photo,
      });
    });
  }
  createForm() {
    this.basicForm = this.fb.group({
      _id: [""],
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
      ...this.basicForm.value,
    };
    this.articleService.updateAdherant(adherant).subscribe((re) => {
      this.egretLoader.open(
        `Adherant ${re.nom} ${re.prenom} modifié avec succés`,
        {
          width: "320px",
        }
      );
      setTimeout(() => {
        this.egretLoader.close();
      }, 2000);
      this.router.navigate(["/dashboard/adherants"]);
    });
  }
}
