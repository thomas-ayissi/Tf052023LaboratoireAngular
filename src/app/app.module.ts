import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TextComponent } from './components/text/text.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { ArticlewrittingComponent } from './components/articlewritting/articlewritting.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TextComponent,
    UserComponent,
    LoginComponent,
    ArticlewrittingComponent
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
