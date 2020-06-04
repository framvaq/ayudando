import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPanelComponent } from './userPanel.component';

const routes: Routes = [{ path: '', component: UserPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule {}
