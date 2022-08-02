import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {GoogleBook} from "../../../../assets/models/data-model";
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../../store/app.state";
import {RemoveWishlistItem} from "../../../store/app.actions";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  @Select(AppState.wishlist) wishlist$: Observable<GoogleBook[]>;
  @Select(AppState.username) name$: Observable<string>;
  constructor(private store: Store) { }

  RemoveWishlistItem(bookId){
    this.store.dispatch(new RemoveWishlistItem(bookId))
  }

}
