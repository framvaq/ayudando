import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsComponent } from './announcements.component';
import { LayoutsModule } from '../helpers/layouts/layouts.module';

@NgModule({
  declarations: [AnnouncementsComponent],
  imports: [CommonModule, AnnouncementsRoutingModule, LayoutsModule]
})
export class AnnouncementsModule {}
