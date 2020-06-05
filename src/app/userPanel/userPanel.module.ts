import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './userPanel-routing.module';
import { UserPanelComponent } from './userPanel.component';

@NgModule({
  declarations: [UserPanelComponent],
  imports: [CommonModule, UserPanelRoutingModule]
})
export class UserPanelModule {}
