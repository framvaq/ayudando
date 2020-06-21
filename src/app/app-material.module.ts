import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatTabsModule,
    MatTableModule,
    MatDatepickerModule,
    MatMomentDateModule
  ]
})
export class AppMaterialModule {}
