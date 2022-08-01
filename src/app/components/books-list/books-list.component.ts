import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Observable} from "rxjs";
import {GoogleBook} from "../../../assets/models/data-model";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input() books$: Observable<GoogleBook[]>
  @Input() selectedBook$: Observable<GoogleBook>
  @Input() isLoading$: Observable<boolean>
  @Output() updateSelectedBook: EventEmitter<GoogleBook> = new EventEmitter<GoogleBook>()
  @Output() addSelectedBookToWishlist: EventEmitter<GoogleBook> = new EventEmitter<GoogleBook>()
  selectedBook: GoogleBook;
  modalRef?: BsModalRef;
  config = {
    animated: true,
    class: 'modal-lg book-modal'
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>, book) {
    this.updateSelectedBook.emit(book)
    this.modalRef = this.modalService.show(template, this.config);
  }
  addToWishlist(){
    this.addSelectedBookToWishlist.emit()
  }
}
