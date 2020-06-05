import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() {}
  // Add radio buttons logic (if "no" is selected, it acts as a normal radio (one choice), else, multiple choice)
  ngOnInit(): void {}
}
