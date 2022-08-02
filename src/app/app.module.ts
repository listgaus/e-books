import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/home/shared/book/book.component';
import { SearchBarComponent } from './components/home/search/search-bar/search-bar.component';
import { BooksListComponent } from './components/home/search/books-list/books-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxsModule} from "@ngxs/store";
import {AppState} from "./store/app.state";
import { WishlistComponent } from './components/home/wishlist/wishlist.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TruncatePipe} from "./pipes/truncate/truncate.pipe";
import {TitlePipe} from "./pipes/capitalize-title/capitalize-title.pipe";
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {BsModalService, ModalModule} from "ngx-bootstrap/modal";
import { BookInfoComponent } from './components/home/search/book-info/book-info.component';
import { SearchComponent } from './components/home/search/search.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SearchBarComponent,
    BooksListComponent,
    WelcomeComponent,
    HomeComponent,
    WishlistComponent,
    TruncatePipe,
    TitlePipe,
    BookInfoComponent,
    SearchComponent,
    DashboardComponent
  ],
  imports: [
    NgxsModule.forRoot([AppState]),
    NgxsStoragePluginModule.forRoot({
      key: 'state'
    }),
    NgxPaginationModule,
    ModalModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    ApiService,
    BsModalService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
