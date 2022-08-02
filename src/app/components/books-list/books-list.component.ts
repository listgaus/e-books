import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {Observable, take} from "rxjs";
import {GoogleBook} from "../../../assets/models/data-model";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  @Input() isLoading$: Observable<boolean>
  @Input() books$: Observable<GoogleBook[]>
  @Input() selectedBook$: Observable<GoogleBook>
  @Output() addWishlistItem: EventEmitter<void> = new EventEmitter()
  @Output() updateSelectedBook: EventEmitter<GoogleBook> = new EventEmitter<GoogleBook>()
  modalRef?: BsModalRef;
  config = {
    animated: true,
    class: 'modal-lg book-modal'
  };
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>, book) {
    this.updateSelectedBook.emit(book)
    this.modalRef = this.modalService.show(template, this.config);
    this.modalService.onHide
      .pipe(take(1))
      .subscribe(() => {
        this.updateSelectedBook.emit(undefined)
      });
  }
  addToWishlist(){
    this.addWishlistItem.emit()
  }

}
