import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnouncementsComponent } from './announcements.component';

const routes: Routes = [
  { path: '', component: AnnouncementsComponent },
  { path: 'anuncio', loadChildren: () => import('./announcement/announcement.module').then(m => m.AnnouncementModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule {}
