import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private booksSub: Subscription;

  constructor(public booksService: BooksService){ }

  ngOnInit(){
    this.booksService.getBooks();
    this.booksSub = this.booksService.getBookUpdateListener()
    .subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  onDelete(bookId: string){
    this.booksService.deleteBook(bookId);
    this.booksService.getBooks()
  }

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
  }

}
