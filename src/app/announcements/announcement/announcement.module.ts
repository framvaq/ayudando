import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { AnnouncementComponent } from './announcement.component';

@NgModule({
  declarations: [AnnouncementComponent],
  imports: [CommonModule, AnnouncementRoutingModule, LayoutsModule]
})
export class AnnouncementModule {}
