import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchViewRoutingModule } from "./search-view-routing.module";
import { ResultPageComponent } from "./result-page/result-page.component";
import { MatCardModule } from "@angular/material/card";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [ResultPageComponent],
  imports: [
    MatCardModule,
    CommonModule,
    NgxDatatableModule,
    MatPaginatorModule,
    SearchViewRoutingModule,
  ],
})
export class SearchViewModule {}
