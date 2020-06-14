import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { FiltersComponent } from './filters.component';

@NgModule({
  declarations: [FiltersComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, FormControl],
  exports: [FiltersComponent]
})
export class FiltersModule {}
