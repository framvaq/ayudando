import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../app-material.module';
import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [FiltersComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
  exports: [FiltersComponent]
})
export class FiltersModule {}
