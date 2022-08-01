import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AppStateModel} from "./state.model";
import {
  AddToWishlist, ClearSearchResults,
  RemoveFromWishlist,
  SearchBooks, SetLoadingState, SetSearchValue, setSelectedBook,
  SetUserName,
} from "./app.actions";
import {GoogleBook} from "../../assets/models/data-model";
import {ApiService} from "../services/api.service";
import {insertItem, patch} from "@ngxs/store/operators";

@State<AppStateModel>({
  name: 'state',
  defaults: {
    searchValue: '',
    searchResults: [],
    username: undefined,
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
    patchState({searchResults: undefined})
  }
  //Wishlist
  @Action(AddToWishlist)
  async addToWishList({getState, patchState, setState} : StateContext<AppStateModel>) {
    const newEl = structuredClone(getState().selectedBook)
    const newResults = structuredClone(getState().searchResults);
    if(newEl === true) {
      const index = newResults.findIndex(o => o.id === newEl.id)
      newEl.inWishlist = true
      newResults[index].inWishlist = true
    }
    setState(
      patch({
        wishlist: insertItem(newEl)
      })
    )
    patchState({
      searchResults: newResults,
      selectedBook: newEl,
    })
  }

  @Action(RemoveFromWishlist)
  async updateSelectCategory({getState, patchState}: StateContext<AppStateModel>, {bookToRemove}: RemoveFromWishlist) {
    // const  newWishList = getState().wishlist.filter(book => book.id === bookToRemove.id);
    // patchState({wishlist: [...getState().wishlist, bookToRemove]});
  }
  //General
  @Action(ClearSearchResults)
  async initialize({patchState}:StateContext<AppStateModel>) {
    patchState({searchResults: undefined, wishlist: undefined, searchValue: '', isLoading: false})
  }
}
