import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books.service';
@Component({
    selector: 'app-book-add',
    templateUrl: './book-add.component.html',
    styleUrls: ['./book-add.component.css']

})
export class BookAddComponent {
    enteredTitle = "";
    enteredAuthor = "";

    constructor(public booksService: BooksService){}   

    onAddBook(form: NgForm) {
        if(form.invalid) return;
        this.booksService.addBooks(form.value.title, form.value.author);
        form.resetForm();
    }

}