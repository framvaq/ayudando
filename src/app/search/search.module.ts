import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { SearchRoutingModule } from './search-routing.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, LayoutsModule, AppMaterialModule, ReactiveFormsModule]
})
export class SearchModule {}
