import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GoogleBook} from "../../../assets/models/data-model";
import {Store} from "@ngxs/store";
import {RemoveWishlistItem} from "../../store/app.actions";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: GoogleBook;
  @Input() isWishlist?: boolean;
  @Output() removeBook: EventEmitter<string> = new EventEmitter<string>()
  @Output() openBookInfo: EventEmitter<void> = new EventEmitter<void>()
  constructor(private store: Store) { }

  remove($event){
    $event.preventDefault()
    this.store.dispatch(new RemoveWishlistItem(this.book.id))
  }
}
