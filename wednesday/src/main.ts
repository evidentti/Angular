import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { MaterialModule } from '@angular/material';
import { DialogsModule } from './app/dialog/dialogs.module';

// uncomment rows below to use in prod mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
