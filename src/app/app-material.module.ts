import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatInputModule, MatSidenavModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule],
  exports: [MatInputModule, MatSidenavModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatButtonModule]
})
export class AppMaterialModule {}
