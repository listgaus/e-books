import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {InitializeState, SetUserName} from "../../store/app.actions";


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

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
   this.store.dispatch(new InitializeState())
  }

  get name() {
    return this.userForm.get('name');
  }

  onSubmit() {
    this.store.dispatch(new SetUserName(this.userForm.get('name')?.value))
    this.router.navigate(['/main']);
  }
}
