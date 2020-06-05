import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'inicio', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'anuncios',
    loadChildren: () => import('./announcements/announcements.module').then(m => m.AnnouncementsModule)
  },
  {
    path: 'anuncios/anuncio',
    loadChildren: () => import('./announcements/announcement/announcement.module').then(m => m.AnnouncementModule)
  },
  { path: 'panel-usuario', loadChildren: () => import('./userPanel/userPanel.module').then(m => m.UserPanelModule) },
  { path: 'nuevo-anuncio', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
  { path: 'registro', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'buscar', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
