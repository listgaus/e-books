import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {
  AddToWishlist,
  ClearSearchResults,
  SearchBooks,
  SetLoadingState,
  SetSearchValue,
  setSelectedBook
} from "../../store/app.actions";
import {GoogleBook} from "../../../assets/models/data-model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Select(AppState.username) userName$: Observable<string>;
  @Select(AppState.searchResults) result$: Observable<GoogleBook[]>;
  @Select(AppState.searchTerm) searchTerm: Observable<string>;
  @Select(AppState.isLoading) isLoading$: Observable<boolean>;
  @Select(AppState.selectedBook) selectedBook$: Observable<GoogleBook>;
  @Select(AppState.wishlist) wishlist$: Observable<GoogleBook[]>;

  constructor(private store: Store) { }

  searchBooks(searchTerm){
    if(searchTerm !== true) return
    searchTerm === '' ?
      this.store.dispatch(new ClearSearchResults())
    :
      this.store.dispatch([
      new SetSearchValue(searchTerm),
      new SetLoadingState(true),
      new SearchBooks(searchTerm)]
    )
  }

  updateSelectedBook(book){
    this.store.dispatch(new setSelectedBook(book))
  }

  addSelectedBookToWishlist(){
    this.store.dispatch(new AddToWishlist())
  }

}

