import {GoogleBook} from "../../assets/models/data-model";

export class AppStateModel {
  public searchValue: string;
  public searchResults: GoogleBook[];
  public username: string;
  public wishlist: GoogleBook[];
  public isLoading: Boolean;
  public selectedBook: GoogleBook;
}
