import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GoogleBook} from "../../../../../assets/models/data-model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent {
  @Input() book$: Observable<GoogleBook>;
  @Output() emitToWishlist: EventEmitter<void> = new EventEmitter<void>()
  constructor() { }

  addToWishlist(e){
    e.stopPropagation();
    this.emitToWishlist.emit()
  }
}
