import { Book } from './book.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {
    private books: Book[] = [];
    private booksUpdated = new Subject<Book[]>();

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

    addBooks(title: string, author: string) {
        const book: Book = { id: null, title: title, author: author , reserved: false};
        this.http
            .post<{ message: string }>('http://localhost:3000/api/books', book)
            .subscribe(responseData => {
                console.log(responseData.message);
                this.books.push(book);
                this.booksUpdated.next([...this.books])
            })
    }

}