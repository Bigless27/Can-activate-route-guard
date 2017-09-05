import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { NoContentComponent } from './no-content';

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '**', component: NoContentComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(ROUTES);
