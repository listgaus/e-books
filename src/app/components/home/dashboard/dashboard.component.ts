import { Component } from '@angular/core';
import {Select} from "@ngxs/store";
import {AppState} from "../../../store/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Select(AppState.username) username$: Observable<string>;
  @Select(AppState.wishlistCount) count$: Observable<number>;
}
