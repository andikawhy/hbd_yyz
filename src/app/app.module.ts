import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatTabsModule,
  MatToolbarModule, MatGridListModule, MatTooltipModule, MatDialogModule, MatChipsModule,
  MatButtonToggleModule, MatInputModule, MatSortModule, MatSlideToggleModule, MatSelectModule,
  MatCheckboxModule, MatRadioModule, MatSidenavModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatTabsModule,
    MatToolbarModule, MatGridListModule, MatTooltipModule, MatDialogModule, MatChipsModule,
    MatButtonToggleModule, MatInputModule, MatSortModule, MatSlideToggleModule, MatSelectModule,
    MatCheckboxModule, MatRadioModule, MatSidenavModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
