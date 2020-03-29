import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BooksService } from '../books.service';
@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css']

})
export class BookEditComponent {
    enteredTitle = "";
    enteredAuthor = "";

    constructor(public booksService: BooksService){}   

    onEditBook(form: NgForm) {
        if(form.invalid) return;
        this.booksService.addBooks(form.value.title, form.value.author);
        form.resetForm();
    }

}