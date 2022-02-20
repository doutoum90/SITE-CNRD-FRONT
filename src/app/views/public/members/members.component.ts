import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { ArticlesService } from "app/views/articles/articles.service";
import { Membre } from "app/views/articles/model/article.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
  animations: [egretAnimations],
})
export class MembersComponent implements OnInit {
  tiles = [
    { text: "&nbsp;", cols: 2, rows: 1 },
    { text: "Président", cols: 1, rows: 1, color: "lightblue" },
    { text: "&nbsp;", cols: 2, rows: 1, color: "lightgreen" },
  ];

  members$: Observable<Membre[]>;

  constructor(
    private readonly articleService: ArticlesService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private loader: AppLoaderService
  ) {}

  ngOnInit(): void {
    /* setTimeout(() => {
      this.loader.open();
    }); */
    this.members$ = this.articleService.getAllMembers().pipe(
      map((members) => {
        this.loader.close();
        return members;
      })
    );
  }

  getPresident(membres: Membre[]) {
    return membres?.find((membre) => membre.isPresident);
  }
  getOtherMembres(membres: Membre[]) {
    return membres?.filter((membre) => !membre.isPresident);
  }
}
