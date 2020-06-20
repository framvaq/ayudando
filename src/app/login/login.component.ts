import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SubmitService } from '../services/submit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = this.formBuilder.group({
    mail: [null],
    pass: [null]
  });

  isSuccesful;
  constructor(
    private formBuilder: FormBuilder,
    private submitService: SubmitService,
    private router: Router,
    private cookies: CookieService
  ) {}

  submit() {
    this.submitService.login(this.data);
  }
  ngOnInit(): void {}
}
