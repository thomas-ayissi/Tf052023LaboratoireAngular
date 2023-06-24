import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    UserComponent,
    LoginComponent,
    CardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    /*HttpClientModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
