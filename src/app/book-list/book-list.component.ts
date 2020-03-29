import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { Book } from '../books/book.model';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private booksSub: Subscription;

 
  constructor(public booksService: BooksService, private router: Router){ }

  ngOnInit(){
    this.booksService.getBooks();
    this.booksSub = this.booksService.getBookUpdateListener()
    .subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  editBook(): void {
    this.router.navigate(["editbook"]);
  }

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
  }

}
