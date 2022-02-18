import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  ViewChildren,
  Output,
  Renderer2,
} from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { LayoutService } from "../../services/layout.service";
import { TranslateService } from "@ngx-translate/core";
import { JwtAuthService } from "../../services/auth/jwt-auth.service";
import { EgretNotifications2Component } from "../egret-notifications2/egret-notifications2.component";
import { Observable } from "rxjs";
import { Categories } from "app/views/articles/model/article.model";
import { ArticlesService } from "app/views/articles/articles.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header-side-front",
  templateUrl: "./header-side-front.template.html",
})
export class HeaderSideFrontComponent implements OnInit {
  @Input() notificPanel;
  @ViewChildren(EgretNotifications2Component) noti;
  public availableLangs = [
    {
      name: "FR",
      code: "fr",
      flag: "flag-icon-fr",
    },
    {
      name: "EN",
      code: "en",
      flag: "flag-icon-us",
    },
    {
      name: "ES",
      code: "es",
      flag: "flag-icon-es",
    },
  ];
  currentLang = this.availableLangs[0];
  categories$: Observable<Categories[]>;

  public egretThemes;
  public layoutConf: any;
  constructor(
    private themeService: ThemeService,
    private layout: LayoutService,
    public translate: TranslateService,
    private renderer: Renderer2,
    public jwtAuth: JwtAuthService,
    private readonly articleService: ArticlesService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.egretThemes = this.themeService.egretThemes;
    this.layoutConf = this.layout.layoutConf;
    this.translate.use(this.currentLang.code);
    this.categories$ = this.articleService.getAllCategories();
  }
  setLang(lng) {
    this.currentLang = lng;
    this.translate.use(lng.code);
  }

  selectCat(id: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigateByUrl(`articles/categories/${id}`);
  }

  toggleSidenav() {
    if (this.layoutConf.sidebarStyle === "closed") {
      return this.layout.publishLayoutChange({
        sidebarStyle: "full",
      });
    }
    this.layout.publishLayoutChange({
      sidebarStyle: "closed",
    });
  }

  onSearch(e) {}
}
