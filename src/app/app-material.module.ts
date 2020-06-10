import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatInputModule, MatSidenavModule, MatIconModule],
  exports: [MatInputModule, MatSidenavModule, MatIconModule]
})
export class AppMaterialModule {}
