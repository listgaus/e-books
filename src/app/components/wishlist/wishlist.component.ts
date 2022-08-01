import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {GoogleBook} from "../../../assets/models/data-model";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  @Input() books$: Observable<GoogleBook[]>
  @Output() removeFromWishList: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.books$.subscribe(
      b => console.log(b)
    )
  }

}
