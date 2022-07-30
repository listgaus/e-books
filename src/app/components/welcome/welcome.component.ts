import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit  {
  userForm: FormGroup = new FormGroup(
    {  name: new FormControl('', [Validators.required, Validators.minLength(3)])
    }
  )

  constructor(private router: Router) {}

  ngOnInit() {
  }

  get name() {
    return this.userForm.get('name');
  }

  onSubmit() {
    this.router.navigate(['/main']);
  }
}
