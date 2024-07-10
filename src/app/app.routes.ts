import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/login-page/login-page.module').then((m) => m.LoginPageModule)}
];
