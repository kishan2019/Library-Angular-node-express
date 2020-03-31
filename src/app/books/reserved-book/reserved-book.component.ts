import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-reserved-book',
  templateUrl: './reserved-book.component.html',
  styleUrls: ['./reserved-book.component.css']
})
export class ReservedBookComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
  }

}
