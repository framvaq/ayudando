import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'panel-usuario', loadChildren: () => import('./userPanel/userPanel.module').then(m => m.UserPanelModule) },
  { path: 'nuevo-anuncio', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
  { path: 'buscar', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { showHeader: false }
  },
  {
    path: 'registro',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    data: { showHeader: false }
  },
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
