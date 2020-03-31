import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  private booksSub: Subscription;
  filterSearch: string;
  toggle: boolean = false;

  constructor(public booksService: BooksService, public router: Router){ }

  ngOnInit(){
    this.booksService.getBooks();
    this.booksSub = this.booksService.getBookUpdateListener()
    .subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  onReserved(book) {
    this.toggle = book.reserved;
    this.toggle = this.toggle ? false: true;
    this.booksService.updateBook(book.id, book.title, book.author, this.toggle);
}

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
  }

}
