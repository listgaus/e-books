import {Component, Input, OnInit} from '@angular/core';
import {GoogleBook} from "../../../assets/models/data-model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: GoogleBook;
  constructor() { }

  ngOnInit(): void {
  }

}
