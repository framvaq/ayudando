import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubmitService } from '../services/submit.service';
import { Router } from '@angular/router';

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
  constructor(private formBuilder: FormBuilder, private submitService: SubmitService, private router: Router) {}

  submit() {
    this.submitService.login(this.data).subscribe(response => {
      // console.log(response);
      response ? this.router.navigate(['/inicio']) : alert('Usuario o contraseña incorrectos');
    });
  }
  ngOnInit(): void {}
}
