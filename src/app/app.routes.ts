import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth/login-page/login-page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./auth/home-page/home-page').then(m => m.HomePage)
  },
 /* {
     path: 'pokemon/:id',
    loadComponent: () =>
      import('./pokemon/pages/pokemon-detail-page/pokemon-detail-page')
        .then(m => m.PokemonDetailPage)
  } */
];
