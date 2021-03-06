import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { ThemeService } from "../../services/theme.service";
import { Subscription } from "rxjs";
import { ILayoutConf, LayoutService } from "app/shared/services/layout.service";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";

@Component({
  selector: "app-sidebar-side-front",
  templateUrl: "./sidebar-side-front.component.html",
})
export class SidebarSideFrontComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  public menuItems: any[];
  public hasIconTypeMenuItem: boolean;
  public iconTypeMenuTitle: string;
  private menuItemsSub: Subscription;
  public layoutConf: ILayoutConf;

  constructor(
    private navService: NavigationService,
    public themeService: ThemeService,
    private layout: LayoutService,
    private readonly jwtAuth: JwtAuthService
  ) {}

  ngOnInit() {
    this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
    this.menuItemsSub = this.navService.menuFrontItems$.subscribe(
      (menuItem) => {
        this.menuItems = menuItem;
        //Checks item list has any icon type.
        this.hasIconTypeMenuItem = !!this.menuItems.filter(
          (item) => item.type === "icon"
        ).length;
      }
    );
    this.layoutConf = this.layout.layoutConf;
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    if (this.menuItemsSub) {
      this.menuItemsSub.unsubscribe();
    }
  }

  toggleCollapse() {
    if (this.layoutConf.sidebarCompactToggle) {
      this.layout.publishLayoutChange({
        sidebarCompactToggle: false,
      });
    } else {
      this.layout.publishLayoutChange({
        // sidebarStyle: "compact",
        sidebarCompactToggle: true,
      });
    }
  }
}
