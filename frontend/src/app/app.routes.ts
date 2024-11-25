import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './app/components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta principal
  { path: 'users', component: UserListComponent }, // Ruta para usuarios
  { path: '**', redirectTo: '' } // Ruta por defecto
];

