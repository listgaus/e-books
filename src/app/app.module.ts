import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    SearchBarComponent,
    BooksListComponent,
    WelcomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
