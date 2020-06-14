import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  form = this.formBuilder.group({
    searchInput: [null]
  });

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    console.log('Valor del form:', this.form.value);
  }
}
