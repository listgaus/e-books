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
  static readonly type = '[AppState] Getting books from api';
  constructor(public searchTerm: string) {}
}
export class setSelectedBook {
  static readonly type = '[AppState] Updating selected book';
  constructor(public book: GoogleBook | undefined) {}
}
export class AddWishlistItem {
  static readonly type = '[AppState] Adding selected book to the whishlist';
}
export class RemoveFromWishlist {
  static readonly type = '[AppState] Removing book from the whishlist';
}

export class ClearSearchResults {
  static readonly type = '[AppState] Clearing search results';
}

export class RemoveWishlistItem {
  static readonly type = '[AppState] removing selected book item from whishlist';
  constructor(public bookId: string) {
  }
}


