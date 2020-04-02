import { LoginService } from './../../login/login.service';
import { User } from './../user.model';
import { Router } from '@angular/router';
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

  ngOnDestroy(){
    this.booksSub.unsubscribe(); 
    this.usersSub.unsubscribe();
  }

}
