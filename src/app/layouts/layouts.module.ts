import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderLayoutComponent } from './header/header-layout.component';
import { SmallAnnouncementLayoutComponent } from './announcement/small-announcement/small-announcement-layout.component';
import { BigAnnouncementComponent } from './announcement/big-announcement/big-announcement/big-announcement.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HeaderLayoutComponent, SmallAnnouncementLayoutComponent],
  declarations: [HeaderLayoutComponent, SmallAnnouncementLayoutComponent, BigAnnouncementComponent]
})
export class LayoutsModule {}
