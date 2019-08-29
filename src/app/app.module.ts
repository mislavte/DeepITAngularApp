import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrzavaComponent } from './drzava/drzava.component';
import { GradComponent } from './grad/grad.component';
import { GradDetailComponent } from './grad/grad-detail/grad-detail.component';
import { DrzavaDetailComponent } from './drzava/drzava-detail/drzava-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DrzavaComponent,
    GradComponent,
    GradDetailComponent,
    DrzavaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
