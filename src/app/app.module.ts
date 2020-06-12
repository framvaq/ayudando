import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-419';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LayoutsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
