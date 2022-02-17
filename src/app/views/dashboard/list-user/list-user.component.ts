import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { egretAnimations } from "app/shared/animations/egret-animations";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { Observable } from "rxjs";
import { ArticlesService } from "../../articles/articles.service";
import { Article, Categories, Users } from "../../articles/model/article.model";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.scss"],
  animations: egretAnimations,
})
export class ListUsersComponent implements OnInit {
  users$: Observable<Users[]>;

  constructor(
    private router: Router,
    private jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService
  ) {}

  ngOnInit() {
    // const user = this.jwtAuth.getUser();
    // console.log(user);
    this.users$ = this.articleService.getAllUsers();
  }

  detail(data: Article) {
    this.router.navigate(["/dashboard/categories/edit", data.id]);
  }

  deleteItem(data: Article) {
    console.log(data);
  }

  archiver(data: Categories) {
    if (!data.isArchived) {
      this.articleService.archiverCategory(data.id, !data.isArchived);
    }
  }
}
