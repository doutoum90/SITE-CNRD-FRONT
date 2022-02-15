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
        { name: "Default", state: "default" },
        {
          name: "LEARNING",
          state: "LEARNING",
        },
        { name: "Analytics", state: "analytics" },
        { name: "Analytics Alt", state: "analytics-alt" },
        { name: "Cryptocurrency", state: "crypto" },
        { name: "Dark Cards", state: "dark" },
      ],
    },
    {
      name: "ECOMMERCE",
      type: "dropDown",
      tooltip: "Shop",
      icon: "shopping_cart",
      state: "shop",
      sub: [
        { name: "PRODUCTS", state: "" },
        { name: "PRODUCT DETAILS", state: "products/5a9ae2106f155194e5c95d67" },
        { name: "CART", state: "cart" },
        { name: "CHECKOUT", state: "checkout" },
      ],
    },
    {
      name: "INBOX",
      type: "link",
      tooltip: "Inbox",
      icon: "inbox",
      state: "inbox",
      badges: [{ color: "primary", value: "4" }],
    },
    {
      name: "Invoice",
      type: "link",
      icon: "receipt",
      state: "invoice/list",
    },
    {
      name: "CHAT",
      type: "link",
      tooltip: "Chat",
      icon: "chat",
      state: "chat",
      badges: [{ color: "warn", value: "1" }],
    },
    {
      name: "Todo",
      type: "link",
      tooltip: "Todo",
      icon: "center_focus_strong",
      state: "todo/list",
    },

    {
      name: "TABLES",
      type: "dropDown",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables",
      sub: [
        { name: "FULLSCREEN", state: "fullscreen" },
        { name: "PAGING", state: "paging" },
        { name: "FILTER", state: "filter" },
        { name: "Material Table", state: "mat-table" },
      ],
    },
    {
      name: "PROFILE",
      type: "dropDown",
      tooltip: "Profile",
      icon: "person",
      state: "profile",
      badges: [{ color: "primary", value: "2" }],
      sub: [
        { name: "OVERVIEW", state: "overview" },
        { name: "SETTINGS", state: "settings" },
        { name: "BLANK", state: "blank" },
      ],
    },
    {
      name: "SESSIONS",
      type: "dropDown",
      tooltip: "Pages",
      icon: "view_carousel",
      state: "sessions",
      sub: [
        { name: "SIGNUP", state: "signup" },
        { name: "Signup 2", state: "signup2" },
        { name: "Signup 3", state: "signup3" },
        { name: "Signup 4", state: "signup4" },
        { name: "SIGNIN", state: "signin" },
        { name: "Signin 2", state: "signin2" },
        { name: "Signin 3", state: "signin3" },
        { name: "Signin 4", state: "signin4" },
        { name: "FORGOT", state: "forgot-password" },
        { name: "LOCKSCREEN", state: "lockscreen" },
        { name: "NOTFOUND", state: "404" },
        { name: "ERROR", state: "error" },
      ],
    },

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
      ],
    },
  ];
  iconMenuFront: IMenuItem[] = [
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
      name: "INBOX",
      type: "link",
      tooltip: "Inbox",
      icon: "inbox",
      state: "inbox",
    },
    {
      name: "CHAT",
      type: "link",
      tooltip: "Chat",
      icon: "chat",
      state: "chat",
    },
    {
      name: "CRUD Table",
      type: "link",
      tooltip: "CRUD Table",
      icon: "format_list_bulleted",
      state: "cruds/ngx-table",
    },
    {
      name: "DIALOGS",
      type: "dropDown",
      tooltip: "Dialogs",
      icon: "filter_none",
      state: "dialogs",
      sub: [
        { name: "CONFIRM", state: "confirm" },
        { name: "LOADER", state: "loader" },
      ],
    },
    {
      name: "PROFILE",
      type: "dropDown",
      tooltip: "Profile",
      icon: "person",
      state: "profile",
      sub: [
        { name: "OVERVIEW", state: "overview" },
        { name: "SETTINGS", state: "settings" },
        { name: "BLANK", state: "blank" },
      ],
    },
    {
      name: "TOUR",
      type: "link",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour",
    },
    {
      type: "separator",
      name: "Integrated components",
    },
    {
      name: "CALENDAR",
      type: "link",
      tooltip: "Calendar",
      icon: "date_range",
      state: "calendar",
    },
    {
      name: "MATERIAL",
      type: "dropDown",
      tooltip: "Material",
      icon: "favorite",
      state: "material",
      sub: [
        { name: "BUTTONS", state: "buttons" },
        { name: "Button Toggle", state: "button-toggle" },
        { name: "Buttons Loading", state: "loading-buttons" },
        { name: "CARDS", state: "cards" },
        { name: "GRIDS", state: "grids" },
        { name: "LISTS", state: "lists" },
        { name: "MENU", state: "menu" },
        { name: "TABS", state: "tabs" },
        { name: "SELECT", state: "select" },
        { name: "RADIO", state: "radio" },
        { name: "AUTOCOMPLETE", state: "autocomplete" },
        { name: "SLIDER", state: "slider" },
        { name: "PROGRESS", state: "progress" },
        { name: "SNACKBAR", state: "snackbar" },
      ],
    },
    {
      name: "FORMS",
      type: "dropDown",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      sub: [
        { name: "BASIC", state: "basic" },
        { name: "EDITOR", state: "editor" },
        { name: "UPLOAD", state: "upload" },
        { name: "WIZARD", state: "wizard" },
      ],
    },
    {
      name: "TABLES",
      type: "dropDown",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables",
      sub: [
        { name: "FULLSCREEN", state: "fullscreen" },
        { name: "PAGING", state: "paging" },
        { name: "FILTER", state: "filter" },
      ],
    },
    {
      name: "MAP",
      type: "link",
      tooltip: "Map",
      icon: "add_location",
      state: "map",
    },
    {
      name: "CHARTS",
      type: "link",
      tooltip: "Charts",
      icon: "show_chart",
      state: "charts",
    },
    {
      name: "DND",
      type: "link",
      tooltip: "Drag and Drop",
      icon: "adjust",
      state: "dragndrop",
    },
    {
      type: "separator",
      name: "Other components",
    },
    {
      name: "SESSIONS",
      type: "dropDown",
      tooltip: "Pages",
      icon: "view_carousel",
      state: "sessions",
      sub: [
        { name: "SIGNUP", state: "signup" },
        { name: "SIGNIN", state: "signin" },
        { name: "FORGOT", state: "forgot-password" },
        { name: "LOCKSCREEN", state: "lockscreen" },
        { name: "NOTFOUND", state: "404" },
        { name: "ERROR", state: "error" },
      ],
    },
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
    {
      name: "MATICONS",
      type: "link",
      tooltip: "Material Icons",
      icon: "store",
      state: "icons",
    },
    {
      name: "DOC",
      type: "extLink",
      tooltip: "Documentation",
      icon: "library_books",
      state: "http://demos.ui-lib.com/egret-doc/",
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
    {
      name: "INBOX",
      type: "link",
      tooltip: "Inbox",
      icon: "inbox",
      state: "inbox",
    },
    {
      name: "CHAT",
      type: "link",
      tooltip: "Chat",
      icon: "chat",
      state: "chat",
    },
    {
      name: "CRUD Table",
      type: "link",
      tooltip: "CRUD Table",
      icon: "format_list_bulleted",
      state: "cruds/ngx-table",
    },
    {
      name: "CALENDAR",
      type: "link",
      tooltip: "Calendar",
      icon: "date_range",
      state: "calendar",
    },
    {
      name: "DIALOGS",
      type: "dropDown",
      tooltip: "Dialogs",
      icon: "filter_none",
      state: "dialogs",
      sub: [
        { name: "CONFIRM", state: "confirm" },
        { name: "LOADER", state: "loader" },
      ],
    },
    {
      name: "MATERIAL",
      type: "dropDown",
      icon: "favorite",
      state: "component",
      sub: [
        { name: "BUTTONS", state: "buttons" },
        { name: "Button Toggle", state: "button-toggle" },
        { name: "Buttons Loading", state: "loading-buttons" },
        { name: "CARDS", state: "cards" },
        { name: "GRIDS", state: "grids" },
        { name: "LISTS", state: "lists" },
        { name: "MENU", state: "menu" },
        { name: "TABS", state: "tabs" },
        { name: "SELECT", state: "select" },
        { name: "RADIO", state: "radio" },
        { name: "AUTOCOMPLETE", state: "autocomplete" },
        { name: "SLIDER", state: "slider" },
        { name: "PROGRESS", state: "progress" },
        { name: "SNACKBAR", state: "snackbar" },
      ],
    },
    {
      name: "FORMS",
      type: "dropDown",
      tooltip: "Forms",
      icon: "description",
      state: "forms",
      sub: [
        { name: "BASIC", state: "basic" },
        { name: "EDITOR", state: "editor" },
        { name: "UPLOAD", state: "upload" },
        { name: "WIZARD", state: "wizard" },
      ],
    },
    {
      name: "TABLES",
      type: "dropDown",
      tooltip: "Tables",
      icon: "format_line_spacing",
      state: "tables",
      sub: [
        { name: "FULLSCREEN", state: "fullscreen" },
        { name: "PAGING", state: "paging" },
        { name: "FILTER", state: "filter" },
      ],
    },
    {
      name: "PROFILE",
      type: "dropDown",
      tooltip: "Profile",
      icon: "person",
      state: "profile",
      sub: [
        { name: "OVERVIEW", state: "overview" },
        { name: "SETTINGS", state: "settings" },
        { name: "BLANK", state: "blank" },
      ],
    },
    {
      name: "TOUR",
      type: "link",
      tooltip: "Tour",
      icon: "flight_takeoff",
      state: "tour",
    },
    {
      name: "MAP",
      type: "link",
      tooltip: "Map",
      icon: "add_location",
      state: "map",
    },
    {
      name: "CHARTS",
      type: "link",
      tooltip: "Charts",
      icon: "show_chart",
      state: "charts",
    },
    {
      name: "DND",
      type: "link",
      tooltip: "Drag and Drop",
      icon: "adjust",
      state: "dragndrop",
    },
    {
      name: "SESSIONS",
      type: "dropDown",
      tooltip: "Pages",
      icon: "view_carousel",
      state: "sessions",
      sub: [
        { name: "SIGNUP", state: "signup" },
        { name: "SIGNIN", state: "signin" },
        { name: "FORGOT", state: "forgot-password" },
        { name: "LOCKSCREEN", state: "lockscreen" },
        { name: "NOTFOUND", state: "404" },
        { name: "ERROR", state: "error" },
      ],
    },
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
    {
      name: "MATICONS",
      type: "link",
      tooltip: "Material Icons",
      icon: "store",
      state: "icons",
    },
    {
      name: "DOC",
      type: "extLink",
      tooltip: "Documentation",
      icon: "library_books",
      state: "http://demos.ui-lib.com/egret-doc/",
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
    console.log("rerrer", menuType);
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
    console.log(menuType);
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
