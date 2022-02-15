import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { LayoutService } from '../../services/layout.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { CustomizerService } from 'app/shared/services/customizer.service';
import { ThemeService, ITheme } from 'app/shared/services/theme.service';

@Component({
  selector: "app-customizer-front",
  templateUrl: "./customizer-front.component.html",
  styleUrls: ["./customizer-front.component.scss"],
})
export class CustomizerFrontComponent implements OnInit {
  isCustomizerOpen = false;
  viewMode: "options" | "json" = "options";
  sidenavTypes = [
    {
      name: "Default Menu",
      value: "default-menu",
    },
    {
      name: "Separator Menu",
      value: "separator-menu",
    },
    {
      name: "Icon Menu",
      value: "icon-menu",
    },
  ];
  sidebarColors: any[];
  topbarColors: any[];

  layoutConf;
  selectedMenu = "icon-menu";
  selectedLayout: string;
  isTopbarFixed = false;
  isFooterFixed = false;
  isRTL = false;
  egretThemes: ITheme[];
  perfectScrollbarEnabled = true;

  constructor(
    private navService: NavigationService,
    public layout: LayoutService,
    private themeService: ThemeService,
    public customizer: CustomizerService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.layoutConf = this.layout.layoutConf;
    this.selectedLayout = this.layoutConf.navigationPos;
    this.isTopbarFixed = this.layoutConf.topbarFixed;
    this.isRTL = this.layoutConf.dir === "rtl";
    this.egretThemes = this.themeService.egretThemes;
    console.log('zezeze')
  }
  changeTheme(theme) {
    // this.themeService.changeTheme(theme);
    this.layout.publishLayoutChange({ matTheme: theme.name });
  }
  changeLayoutStyle(data) {
    this.layout.publishLayoutChange({ navigationPos: this.selectedLayout });
  }
  changeSidenavFront(data) {
    console.log(data)
    this.navService.publishFrontNavigationChange(data.value);
  }
  toggleBreadcrumb(data) {
    this.layout.publishLayoutChange({ useBreadcrumb: data.checked });
  }
  toggleTopbarFixed(data) {
    this.layout.publishLayoutChange({ topbarFixed: data.checked });
  }
  toggleDir(data) {
    let dir = data.checked ? "rtl" : "ltr";
    this.layout.publishLayoutChange({ dir: dir });
  }
  tooglePerfectScrollbar(data) {
    this.layout.publishLayoutChange({
      perfectScrollbar: this.perfectScrollbarEnabled,
    });
  }
}
