import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  constructor(formcontrol: FormControl) {}
  formcontrol = new FormControl('');
}
