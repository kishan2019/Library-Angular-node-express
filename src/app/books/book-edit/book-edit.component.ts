import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books.service';
import { Book } from '../book.model';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css']

})
export class BookEditComponent implements OnInit {
    enteredTitle = "";
    enteredAuthor = "";
    book: Book;
    bookId: string;

    constructor(public booksService: BooksService, public route: ActivatedRoute ){}   
    
    ngOnInit(){
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
        this.bookId = paramMap.get("bookId");
        this.booksService.getBook(this.bookId).subscribe(bookData => {
            this.book = {
                id: bookData.id, 
                title: bookData.title, 
                author: bookData.author, 
                reserved: false
            };
          });
        });
    }

    onEditBook(form: NgForm) {
        if(form.invalid) return;
        this.booksService.updateBook(this.bookId,form.value.title, form.value.author);
        form.resetForm();
        form.resetForm();
    }
}
    