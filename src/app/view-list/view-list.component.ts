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

 
  constructor(public booksService: BooksService){ }

  ngOnInit(){
    this.booksService.getBooks();
    this.booksSub = this.booksService.getBookUpdateListener()
    .subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  onAddStatus(): void {
    
  }

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
  }

}
