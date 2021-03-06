import {
  Component,
  OnInit,
  Input,
  Renderer2,
} from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { LayoutService } from "../../services/layout.service";
import { TranslateService } from "@ngx-translate/core";
import { JwtAuthService } from "../../services/auth/jwt-auth.service";
import { Users } from "app/views/articles/model/article.model";

@Component({
  selector: "app-header-side",
  templateUrl: "./header-side.template.html",
})
export class HeaderSideComponent implements OnInit {
  @Input() notificPanel;
  user: Users;
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
  ];
  currentLang = this.availableLangs[0];

  public egretThemes;
  public layoutConf: any;
  constructor(
    private themeService: ThemeService,
    private layout: LayoutService,
    public translate: TranslateService,
    private renderer: Renderer2,
    public readonly jwtAuth: JwtAuthService
  ) {}
  ngOnInit() {
    this.user = this.jwtAuth.getUser();
    this.egretThemes = this.themeService.egretThemes;
    this.layoutConf = this.layout.layoutConf;
    this.translate.use(this.currentLang.code);
  }
  setLang(lng) {
    this.currentLang = lng;
    this.translate.use(lng.code);
  }
  changeTheme(theme) {
    // this.themeService.changeTheme(theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
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

  toggleCollapse() {
    // compact --> full
    if (this.layoutConf.sidebarStyle === "compact") {
      return this.layout.publishLayoutChange(
        {
          sidebarStyle: "full",
          sidebarCompactToggle: false,
        },
        { transitionClass: true }
      );
    }

    // * --> compact
    this.layout.publishLayoutChange(
      {
        sidebarStyle: "compact",
        sidebarCompactToggle: true,
      },
      { transitionClass: true }
    );
  }

  onSearch(e) {}
}
