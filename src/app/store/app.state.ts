import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AppStateModel} from "./state.model";
import {
  SetUserName,
  SetSearchValue,
  SetLoadingState,
  SearchBooks,
  setSelectedBook,
  AddWishlistItem,
  RemoveWishlistItem,
  ClearSearchResults,
} from "./app.actions";
import {GoogleBook} from "../../assets/models/data-model";
import {ApiService} from "../services/api.service";
import {insertItem, patch} from "@ngxs/store/operators";

@State<AppStateModel>({
  name: 'state',
  defaults: {
    searchValue: '',
    searchResults: [],
    username: '',
    wishlist: [],
    isLoading: false,
    selectedBook: undefined
  }
})

@Injectable()

export class AppState {
  constructor(private api: ApiService) {}

  //Selectors
  @Selector([AppState])
  static isLoading(state: AppStateModel): Boolean {
    return state.isLoading;
  }
  @Selector([AppState])
  static username(state: AppStateModel): string {
    return state.username;
  }
  @Selector([AppState])
  static searchTerm(state: AppStateModel): string {
    return state.searchValue;
  }
  @Selector([AppState])
  static searchResults(state: AppStateModel): GoogleBook[] {
    return state.searchResults;
  }
  @Selector([AppState])
  static selectedBook(state: AppStateModel): GoogleBook {
    return state.selectedBook;
  }
  @Selector([AppState])
  static wishlist(state: AppStateModel): GoogleBook[] {
    return state.wishlist;
  }
  @Selector([AppState])
  static wishlistCount(state: AppStateModel): number {
    return state.wishlist.length;
  }

  //State Actions
  @Action(SetLoadingState)
  async setLoadingState({patchState}: StateContext<AppStateModel>, {isLoadingState}: SetLoadingState) {
    patchState({
      isLoading: isLoadingState
    })
  }
  @Action(SetUserName)
  async setUserName({patchState}: StateContext<AppStateModel>, {username}: SetUserName) {
    patchState({
      username: username
    })
  }
  //Books
  @Action(SetSearchValue)
  async SetSearchTerm({ patchState }: StateContext<AppStateModel>, {searchValue}: SetSearchValue) {
    patchState({
      searchValue: searchValue
    })
  }
  @Action(SearchBooks)
  async search({getState, patchState}: StateContext<AppStateModel>, {searchTerm}: SearchBooks) {
    if(searchTerm === undefined) return
    this.api.getBooks(searchTerm)
      .subscribe(results => patchState({ searchResults: results.items, isLoading: false}));
  }
  @Action(setSelectedBook)
  async setSelectedBook({patchState}:StateContext<AppStateModel>,{book}: setSelectedBook) {
    patchState({selectedBook: book})
  }
  @Action(ClearSearchResults)
  async clearResults({patchState}:StateContext<AppStateModel>) {
    patchState({searchResults: []})
  }
  //Wishlist
  @Action(RemoveWishlistItem)
  async removeWishlistItem({getState, patchState}: StateContext<AppStateModel>, {bookId}: RemoveWishlistItem) {
    const list = structuredClone(getState().wishlist);
    const newWishList = list.filter(book => book.id !== bookId);
    patchState({wishlist: [...newWishList]});
  }
  @Action(AddWishlistItem)
  async addToWishList({getState, patchState, setState} : StateContext<AppStateModel>) {
    const newEl = structuredClone(getState().selectedBook)
    if(getState().wishlist.find(book => book.id === newEl.id)) return;
    const newResults = structuredClone(getState().searchResults);
    const index = newResults.findIndex(o => o.id === newEl.id)
      newEl.inWishlist = true
      newResults[index].inWishlist = true
    setState(
      patch({
        wishlist: insertItem(newEl, 1)
      })
    )
    patchState({
      searchResults: newResults,
      selectedBook: newEl,
    })
  }
  //General
  @Action(ClearSearchResults)
  async initialize({patchState}:StateContext<AppStateModel>) {
    patchState({searchResults: [], wishlist: [], searchValue: '', isLoading: false})
  }
}
