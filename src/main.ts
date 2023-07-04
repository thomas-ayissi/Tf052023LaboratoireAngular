import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {

  enableProdMode();

}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*

--DOWN WORKING CODE CONTAINED HERE BEFORE REPLACE IT BY ADDING NEW ENI BOOK CODE--

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


--DOWN WORKING NEW ENI BOOK CODE--



 */
