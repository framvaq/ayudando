import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { AppMaterialModule } from '../app-material.module';
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, LayoutsModule, AppMaterialModule]
})
export class SearchModule {}
