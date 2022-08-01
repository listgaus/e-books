import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoogleBook} from "../../../assets/models/data-model";
import {distinctUntilChanged, Observable, tap} from "rxjs";

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {
  @Input() book$: Observable<GoogleBook>;
  @Output() emitToWishlist: EventEmitter<void> = new EventEmitter<void>()
  book: GoogleBook;
  isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }


  addToWishlist(){
    this.emitToWishlist.emit()
  }
}
