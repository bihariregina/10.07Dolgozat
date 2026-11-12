
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Rombatlo } from './rombatlo/rombatlo';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'rombatlo', component: Rombatlo },
  { path: '**', redirectTo: '' }
];


