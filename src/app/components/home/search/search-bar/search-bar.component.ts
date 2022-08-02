import {Component, EventEmitter,  OnInit, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, map} from "rxjs";
import {FormControl, FormGroup, } from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormGroup = new FormGroup(
    {  search: new FormControl()
    }
  )

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(
      map(form => form.search),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe( value => {
      console.log('search value', value)
        if (value === undefined) return
        this.valueChange.emit(value)
      }
    )
    this.checkLocalStorage()
  }

  checkLocalStorage(){
    if((localStorage.length === 0 || null || undefined) || (this.searchForm.get('search').value !== null || undefined) ) return;
    const value = JSON.parse(localStorage['state'])?.searchValue;
    value.length !== 0  ? this.searchForm.get('search').setValue(value.toString()) : '';
  }
}
