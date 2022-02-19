import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Folder, File } from "../articles/model/article.model";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  url: any;
  folders: Folder[] = [
    {
      name: "docs",
      files: [
        { name: "2022 STATUTS CNRD.pdf", lien: "2022_STATUTS_CNRD.pdf" },
        {
          name: "REGLEMENT INTERIEUR CNR-VF.pdf",
          lien: "REGLEMENT_INTERIEUR_CNR_VF.pdf",
        },
      ],
    },
    {
      name: "adhesion",
      files: [
        {
          name: "Nouvelle démande d'adhesion CNRD-2022.pdf",
          lien: "Nouvelle démande_adhesion_CNRD_2022.pdf",
        },
      ],
    },
  ];
  selectedFolder: Folder;
  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  open(folder: Folder) {
    this.selectedFolder = folder;
    this.url = undefined;
  }

  openFile(file: File) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `./assets/${this.selectedFolder.name}/${file.lien}`
    );
  }
}
