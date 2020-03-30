import { Book } from '../book.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
    transform(bookFilter: Book[], filterSearch: string): Book[]{
        if(!bookFilter || !filterSearch){
            return bookFilter;
        }

        return bookFilter.filter(book => 
            book.title.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1)
    }

}