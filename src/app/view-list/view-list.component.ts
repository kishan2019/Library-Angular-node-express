import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { Book } from '../books/book.model';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private booksSub: Subscription;
  filterSearch: string;

  constructor(public booksService: BooksService){ }

  ngOnInit(){
    console.log(this.filterSearch)
    this.booksService.getBooks();
    this.booksSub = this.booksService.getBookUpdateListener()
    .subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
  }

}
