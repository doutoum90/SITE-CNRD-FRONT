import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ArticlesService } from "../articles/articles.service";
import { Membre } from "../articles/model/article.model";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {
  members$: Observable<Membre[]>;

  constructor(private readonly articleService: ArticlesService) {}

  ngOnInit(): void {
    this.members$ = this.articleService.getAllMembers();
  }

  getPresident(membres: Membre[]) {
    return membres?.find((membre) => membre.isPresident);
  }
  getOtherMembres(membres: Membre[]) {
    return membres?.filter((membre) => !membre.isPresident);
  }
}
