import { User } from './user.model';
import { Book } from './book.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {
    private books: Book[] = [];
    private users: User[] = [];
    private booksUpdated = new Subject<Book[]>();
    private usersUpdated = new Subject<User[]>();


    constructor(private http: HttpClient) { }

    getBooks() {
        this.http.get<{ message: string, books: Book[] }>('http://localhost:3000/api/books')
            .subscribe((bookData) => {
                this.books = bookData.books;
                this.booksUpdated.next([...this.books]);
            });
    }

    getBookUpdateListener() {
        return this.booksUpdated.asObservable();
    }
    getUserUpdateListener() {
        return this.usersUpdated.asObservable();
    }

    getBook(id: string){
        return this.http.get<{ id: string, title: string, author: string, reserved: boolean }>(
            "http://localhost:3000/api/books/" + id
        );
    }

    addBooks(title: string, author: string) {
        const book: Book = {id: null, title: title, author: author , reserved: false};
        this.http
            .post('http://localhost:3000/api/books', book)
            .subscribe(() => {
                this.books.push(book);
                this.booksUpdated.next([...this.books])
            })
    }

    updateBook(id: string, title: string, author: string, reserved: boolean) {
        const book: Book = { id: id, title: title, author: author, reserved: reserved };
        this.http
          .put("http://localhost:3000/api/books/" + id, book)
          .subscribe(() => {
            const updatedBooks = [...this.books];
            const oldBookIndex = updatedBooks.findIndex(p => p.id === book.id);
            updatedBooks[oldBookIndex] = book;
            this.books = updatedBooks;
            this.booksUpdated.next([...this.books]);
          });
      }

    deleteBook(bookId: string) {
        this.http
            .delete("http://localhost:3000/api/books/" + bookId)
            .subscribe(() => {
                const updatedBooks = this.books.filter(book => book.id !== bookId);
                this.booksUpdated.next([...updatedBooks]);
        })
    }

    getUsers() {
        this.http.get<{users: User[] }>('http://localhost:3000/api/getUsers')
            .subscribe((userData) => {
                 this.users = userData['books'];
                 this.usersUpdated.next([...this.users]);
            });
    }

    addRegisteredUser(id: string, username: string){
        const user: User = {bookid: id, username: username};
        this.http
            .post('http://localhost:3000/api/addReservedUser', user)
            .subscribe(() => {
                this.users.push(user);
                this.usersUpdated.next([...this.users])
            })

    }

}