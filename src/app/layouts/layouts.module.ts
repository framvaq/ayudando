import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BigAnnouncementComponent } from './announcement/big-announcement/big-announcement.component';
import { SmallAnnouncementLayoutComponent } from './announcement/small-announcement/small-announcement-layout.component';
import { HeaderLayoutComponent } from './header/header-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HeaderLayoutComponent, SmallAnnouncementLayoutComponent],
  declarations: [HeaderLayoutComponent, SmallAnnouncementLayoutComponent, BigAnnouncementComponent]
})
export class LayoutsModule {}
