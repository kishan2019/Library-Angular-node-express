import { LoginService } from './../../login/login.service';
import { User } from './../user.model';
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
  users: User[] = [];
  private booksSub: Subscription;
  private usersSub: Subscription;
  filterSearch: string;
  toggle: boolean = false;
  username: string;

  constructor(public booksService: BooksService, private data: LoginService, public router: Router){ }

  ngOnInit(){
    this.booksService.getBooks();
    this.booksSub = this.booksService.getBookUpdateListener()
    .subscribe((books: Book[]) => {
      this.books = books;
    });

    this.booksService.getUsers();
    this.usersSub = this.booksService.getUserUpdateListener()
    .subscribe((users: User[]) => {
      this.users = users;
    });
    this.data.currentUser.subscribe(username => this.username = username)
  }

  onReserved(book) {
    this.toggle = book.reserved;
    this.toggle = this.toggle ? false: true;
    this.booksService.updateBook(book.id, book.title, book.author, this.toggle);
    this.onRegisteredUpdate(book.id, this.username);
}

  onRegisteredUpdate(id, user){
    this.booksService.addRegisteredUser(id, user)
  }

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
    this.usersSub.unsubscribe();
  }

}
