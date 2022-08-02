import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../store/app.state";
import {distinctUntilChanged, Observable, share} from "rxjs";
import {GoogleBook} from "../../../assets/models/data-model";
import {
  AddWishlistItem,
  ClearSearchResults, SearchBooks,
  SetLoadingState,
  SetSearchValue,
  setSelectedBook
} from "../../store/app.actions";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Select(AppState.searchResults) result$: Observable<GoogleBook[]>;
  @Select(AppState.searchTerm) searchTerm: Observable<string>;
  @Select(AppState.isLoading) isLoading$: Observable<boolean>;
  @Select(AppState.selectedBook) selectedBook$: Observable<GoogleBook>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.selectedBook$.pipe(
      share(),
      distinctUntilChanged()
    )
  }

  searchBooks(searchTerm){
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

  addToWishlist(){
    this.store.dispatch(new AddWishlistItem())
  }

}
