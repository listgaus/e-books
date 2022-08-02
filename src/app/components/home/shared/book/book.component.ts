import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GoogleBook} from "../../../../../assets/models/data-model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book: GoogleBook;
  @Input() isWishlist: boolean;
  @Output() removeBook: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  remove(){
    this.removeBook.emit(this.book.id)
  }
}
