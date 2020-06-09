import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderLayoutComponent } from './header/header-layout.component';
import { SmallAnnouncementLayoutComponent } from './small-announcement/small-announcement-layout.component';
import { BigAnnouncementLayoutComponent } from './big-announcement/big-announcement-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HeaderLayoutComponent, SmallAnnouncementLayoutComponent, BigAnnouncementLayoutComponent],
  declarations: [HeaderLayoutComponent, SmallAnnouncementLayoutComponent, BigAnnouncementLayoutComponent]
})
export class LayoutsModule {}
