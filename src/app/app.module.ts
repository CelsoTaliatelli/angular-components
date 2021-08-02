import { TableCustomRowDirective } from './components/table/table-custom-row.directive';
import { TableColumnIconComponent } from './components/table/table-column-icon/table-column-icon.component';
import { AppServiceService } from './app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableSortDirective } from './components/table/table-sort.directive';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableColumnIconComponent,
    TableSortDirective,
    TableCustomRowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
