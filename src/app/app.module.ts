import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from "./components/card/card.component";
import { FooterComponent } from "./components/footer/footer.component";
import localeFr from '@angular/common/locales/fr-BE';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }




/*

import { AppComponent} from './app.component';


import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';

import { CardComponent } from "./components/card/card.component";

import { FooterComponent } from "./components/footer/footer.component";
import localeFr from '@angular/common/locales/fr-BE';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {ContactFormComponent} from "./components/contact-form/contact-form.component";
registerLocaleData ( localeFr , 'fr-FR');


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormsModule,
    FooterComponent
  ],

  exports:[
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FooterComponent
  ],

  imports:[
    AppComponent,

    BrowserModule,
    AppRoutingModule,


  ],

    providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    bootstrap: [AppComponent]
})
export class AppModule {}





  */


















/* --- DOWN OLD VERSION CODE INSIDE FILE - FUNCTIONNAL VERSION--

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './components/footer/footer.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './components/card/card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    UserComponent,
    LoginComponent,
    CardComponent,
    ContactFormComponent,


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
