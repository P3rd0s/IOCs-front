import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IocDetailsComponent } from './components/ioc-details/ioc-details.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { DateNumToNamePipe } from './shared/pipes/date-num-to-name.pipe';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import { NumToArrayPipe } from './shared/pipes/num-to-array.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import { EncodeURIComponentPipe } from './shared/pipes/encode-uricomponent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IocDetailsComponent,
    DateNumToNamePipe,
    NumToArrayPipe,
    EncodeURIComponentPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterOutlet,
    NgxChartsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
