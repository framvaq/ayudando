import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [MatInputModule, MatSidenavModule, MatIconModule, MatCheckboxModule],
  exports: [MatInputModule, MatSidenavModule, MatIconModule, MatCheckboxModule]
})
export class AppMaterialModule {}
