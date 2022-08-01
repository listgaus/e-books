import {GoogleBook} from "../../assets/models/data-model";

export class SetUserName {
  static readonly type = '[AppState] Set User';
  constructor(public username: string) {
  }
}
export class SetSearchValue {
  static readonly type = '[AppState] Set Search Term';
  constructor(public searchValue: string) {
  }
}
export class SetLoadingState {
  static readonly type = '[AppState] Set loading state';
  constructor(public isLoadingState: Boolean) {
  }
}
export class SearchBooks {
  static readonly type = '[AppState] Setting books from api';
  constructor(public searchTerm: string) {}
}
export class setSelectedBook {
  static readonly type = '[AppState] Setting books from api';
  constructor(public book: GoogleBook | undefined) {}
}
export class AddToWishlist {
  static readonly type = '[AppState] Adding selected book to whishlist';
}
export class RemoveFromWishlist {
  static readonly type = '[AppState] Adding selected book to whishlist';
  constructor(public bookToRemove: GoogleBook) {
  }
}
export class ClearSearchResults {
  static readonly type = '[AppState] Clearing search results';
}

export class InitializeState {
  static readonly type = '[AppState] Clearing search results';
}
