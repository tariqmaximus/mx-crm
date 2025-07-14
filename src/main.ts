import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Set default theme first (optional but cleaner)
document.documentElement.setAttribute('data-theme', 'light');

// Bootstrap the app
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
