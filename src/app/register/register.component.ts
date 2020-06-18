import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SubmitService } from '../services/submit.service';
import { Communities } from '../assets/places';
import { PLACES } from '../assets/places-values';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data = this.formBuilder.group({
    email: [null, Validators.required],
    pass: [null, Validators.required],
    passver: [null, Validators.required],
    place: [null, Validators.required],
    user: [null, Validators.required],
    type: [null, Validators.required],
    contactno: [false],
    contactcontact: [false],
    contactannouncement: [false]
  });

  requiredErrorMessage = 'Este campo es obligatorio';

  communities: Communities[] = PLACES;

  constructor(private formBuilder: FormBuilder, private submitService: SubmitService, private router: Router) {}

  ngOnInit(): void {}

  getRequiredErrorMessage() {
    if (this.data.value.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.data.value.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit() {
    // console.log('data.value = ', this.data.value);

    if (this.validate()) {
      // console.log('valid');

      this.submitService.createUser(this.data).subscribe(
        response => console.log(response),
        err => console.log(err)
      );

      this.router.navigate(['/login']);
    }
  }

  validate() {
    // console.log('validateEmail', this.validateEmail(this.data.value.email));
    // console.log('validatePass', this.validatePass(this.data.value.pass));
    // console.log('validatePassVer', this.validatePassver(this.data.value.pass, this.data.value.passver));
    // console.log('validatePlace', this.validatePlace(this.data.value.place));
    // console.log('validateUser', this.validateUser(this.data.value.user));
    // console.log('validateType', this.validateType(this.data.value.type));
    // console.log(
    //   'validateContact',
    //   this.validateContact(
    //     this.data.value.contactno,
    //     this.data.value.contactcontact,
    //     this.data.value.contactannouncement
    //   )
    // );

    return (
      this.validateEmail(this.data.value.email) &&
      this.validatePass(this.data.value.pass) &&
      this.validatePassver(this.data.value.pass, this.data.value.passver) &&
      this.validatePlace(this.data.value.place) &&
      this.validateUser(this.data.value.user) &&
      this.validateType(this.data.value.type) &&
      this.validateContact(
        this.data.value.contactno,
        this.data.value.contactcontact,
        this.data.value.contactannouncement
      )
    );
  }

  validateEmail(mail) {
    // Regular expression inspired by https://ihateregex.io/
    // Returns true for anything but @, space, tabs, new lines and accentuated letters in those groups: []@[].[]
    return /[^@ \t\r\náéíóúÁÉÍÓÚ]+@[^@ \t\r\náéíóúÁÉÍÓÚ]+\.[^@ \t\r\náéíóúÁÉÍÓÚ]+/.test(mail);
  }

  validatePass(pass) {
    // Regular expression inspired by https://ihateregex.io/
    // At least: 8 chars, one uppercase, one lowercase, one number and one special charachter(#?!@$ %^&*_-)
    return /^(?=.*?[A-ZÇÑ])(?=.*?[a-zçñ])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-]).{8,}$/.test(pass);
  }

  validatePassver(pass, passver) {
    return pass === passver;
  }

  validatePlace(place) {
    return place !== null && place !== undefined;
  }

  validateUser(user) {
    // Accepts lower and upper case, _ and -, with a minimum of 3 chars and max of 20
    return /^[a-zA-ZñÑçÇ0-9_-]{3,20}$/.test(user);
  }

  validateType(type) {
    return type === 'ask' || type === 'give' || type === 'both';
  }

  validateContact(no, contact, announcement) {
    // console.log(contact.no);
    return no || contact || announcement;
  }
}
