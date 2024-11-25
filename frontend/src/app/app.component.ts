import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Bienvenido a Angular con SSR y Standalone Components</h1>
    <router-outlet></router-outlet>
  `,
  standalone: true
})
export class AppComponent {}
