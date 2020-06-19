import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canLoad: [AuthGuard] },
  {
    path: 'panel-usuario',
    loadChildren: () => import('./userPanel/userPanel.module').then(m => m.UserPanelModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'nuevo-anuncio',
    loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'buscar',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
    canLoad: [AuthGuard]
  },
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
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
