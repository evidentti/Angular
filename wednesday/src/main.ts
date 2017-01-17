import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// uncomment rows below to use in prod mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
