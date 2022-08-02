import {Component} from '@angular/core';
import {Select} from "@ngxs/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Select(AppState.username) userName$: Observable<string>;
  constructor() { }
}

