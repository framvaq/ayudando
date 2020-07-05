import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Communities } from '../assets/places';
import { PLACES } from '../assets/places-values';
import { AnnouncementsService } from '../services/announcements.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  data = this.formBuilder.group({
    // TODO support several errors (Validators.minLength(5), Validators.maxLength(50)])
    title: [null, [Validators.required]],
    description: [null, Validators.maxLength(1000)],
    date: [null],
    place: [null, Validators.maxLength],
    type: [null, Validators.required]
  });

  communities: Communities[] = PLACES;

  requiredErrorMessage = 'Este campo es obligatorio';
  maxlengthErrorMessage = 'No puede superar 1000 caracteres';
  thisYear;
  thisMonth;
  thisDay;
  minDate;

  constructor(
    private formBuilder: FormBuilder,
    private announcementsService: AnnouncementsService,
    private router: Router
  ) {
    this.thisYear = new Date().getFullYear();
    this.thisMonth = 1 + new Date().getMonth();
    this.thisDay = new Date().getDate();
    this.minDate = new Date(this.thisYear, this.thisMonth, this.thisDay);
  }

  ngOnInit(): void {}

  submit() {
    // console.log(this.data.value);
    // console.log('form is valid? ', this.validate());
    if (this.validate()) {
      this.announcementsService.insertAnnouncement(this.data.value);
      this.router.navigate(['inicio']);
    }
  }

  validate() {
    return (
      this.data.value.title !== null &&
      this.data.value.title !== '' &&
      this.data.value.description !== null &&
      this.data.value.description !== '' &&
      this.data.value.type !== null &&
      this.data.value.type !== ''
    );
  }
}
