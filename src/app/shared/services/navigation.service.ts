import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  iconMenu: IMenuItem[] = [
    {
      name: "HOME",
      type: "icon",
      tooltip: "Home",
      icon: "home",
      state: "home",
    },
    {
      name: "APROPOS",
      type: "icon",
      tooltip: "A Propos",
      icon: "info",
      state: "about",
    },
    {
      name: "CONTACT",
      type: "icon",
      tooltip: "Contact",
      icon: "contacts",
      state: "contacts",
    },
    {
      type: "separator",
      name: "Main Items",
    },
    {
      name: "DASHBOARD",
      type: "dropDown",
      tooltip: "Dashboard",
      svgIcon: "ulb_server",
      state: "dashboard",
      sub: [
        { name: "Articles", state: "articles" },
        { name: "Categories", state: "categories" },
        { name: "Users", state: "users" },
        { name: "Membres", state: "members" },
        { name: "Adherants", state: "adherants" },
      ],
    },
    {
      name: "PROFILE",
      type: "dropDown",
      tooltip: "Profile",
      icon: "person",
      state: "profile",
    },
  ];
  iconMenuFront: IMenuItem[] = [];

  separatorMenu: IMenuItem[] = [
    {
      type: "separator",
      name: "Custom components",
    },
    {
      name: "DASHBOARD",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
    },

    {
      name: "PROFILE",
      type: "dropDown",
      tooltip: "Profile",
      icon: "person",
      state: "profile",
    },
  ];
  separatorMenuFront: IMenuItem[] = [
    {
      name: "OTHERS",
      type: "dropDown",
      tooltip: "Others",
      icon: "blur_on",
      state: "others",
      sub: [
        { name: "GALLERY", state: "gallery" },
        { name: "PRICINGS", state: "pricing" },
        { name: "USERS", state: "users" },
        { name: "BLANK", state: "blank" },
      ],
    },
  ];

  plainMenu: IMenuItem[] = [
    {
      name: "DASHBOARD",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard",
    },
  ];
  plainMenuFront: IMenuItem[] = [
    {
      name: "OTHERS",
      type: "dropDown",
      tooltip: "Others",
      icon: "blur_on",
      state: "others",
      sub: [
        { name: "GALLERY", state: "gallery" },
        { name: "PRICINGS", state: "pricing" },
        { name: "USERS", state: "users" },
        { name: "BLANK", state: "blank" },
      ],
    },
  ];
  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = "Frequently Accessed";
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  menuFrontItems = new BehaviorSubject<IMenuItem[]>(this.iconMenuFront);
  // navigation component has subscribed to this Observable
  menuFrontItems$ = this.menuFrontItems.asObservable();
  constructor() {}

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case "separator-menu":
        this.menuItems.next(this.separatorMenu);
        break;
      case "icon-menu":
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.plainMenu);
    }
  }

  publishFrontNavigationChange(menuType: string) {
    switch (menuType) {
      case "separator-menu":
        this.menuFrontItems.next(this.separatorMenuFront);
        break;
      case "icon-menu":
        this.menuFrontItems.next(this.iconMenuFront);
        break;
      default:
        this.menuFrontItems.next(this.plainMenuFront);
    }
  }
}
