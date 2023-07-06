import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactFormComponent} from "./components/contact-form/contact-form.component";

const routes: Routes = [

  // Autres routes de votre application

  { path: 'article/:id', component: ContactFormComponent },

  // Autres routes de votre application


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




