import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './Features/contact/contact.component';
import { AboutUsComponent } from './Features/about-us/about-us.component';
import { DownloadPageComponent } from './Features/download-page/download-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'download-app', component: DownloadPageComponent },
];
