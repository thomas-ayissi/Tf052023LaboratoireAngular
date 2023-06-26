import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompleteArticleComponent} from "./components/complete-article/complete-article.component";

const routes: Routes = [

  // Autres routes de votre application

  { path: 'article/:id', component: CompleteArticleComponent },

  // Autres routes de votre application


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




