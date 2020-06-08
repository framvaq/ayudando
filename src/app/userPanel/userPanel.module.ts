import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './userPanel-routing.module';
import { UserPanelComponent } from './userPanel.component';
import { LayoutsModule } from '../helpers/layouts/layouts.module';

@NgModule({
  declarations: [UserPanelComponent],
  imports: [CommonModule, UserPanelRoutingModule, LayoutsModule]
})
export class UserPanelModule {}
