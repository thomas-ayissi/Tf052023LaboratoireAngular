import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import {CardComponent} from "./components/card/card.component";
import localeFr from '@angular/common/locales/fr-BE';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
registerLocaleData ( localeFr , 'fr-FR');


@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],

  exports:[
    BrowserModule,
    AppRoutingModule
  ],

  imports:[
    BrowserModule,
    AppRoutingModule
  ],

  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
















/* --- DOWN OLD VERSION CODE INSIDE FILE - FUNCTIONNAL VERSION--

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './components/card/card.component';
import { CompleteArticleComponent } from './components/complete-article/complete-article.component';



@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    UserComponent,
    LoginComponent,
    CardComponent,
    CompleteArticleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    /*HttpClientModule*/
/* ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

*/


/*
--DOWN FUNCTIONAL CODE VERSION FUNCTIONNAL ONE--
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Component} from './app.component';

@NgModule({
  declarations: [
    Component
  ],

  imports:[
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [Component]
})
export class AppModule {}

 */
