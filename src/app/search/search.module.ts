import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { FiltersModule } from '../assets/filters.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, LayoutsModule, AppMaterialModule, FiltersModule]
})
export class SearchModule {}
