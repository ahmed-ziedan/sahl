import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './Features/contact/contact.component';
import { AboutUsComponent } from './Features/about-us/about-us.component';
import { DownloadPageComponent } from './Features/download-page/download-page.component';
import { ServicesComponent } from './Features/services/services.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./Features/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Features/about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      ),
  },

  {
    path: 'download-app',
    loadComponent: () =>
      import('./Features/download-page/download-page.component').then(
        (c) => c.DownloadPageComponent
      ),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./Features/services/services.component').then(
        (c) => c.ServicesComponent
      ),
  },
];
